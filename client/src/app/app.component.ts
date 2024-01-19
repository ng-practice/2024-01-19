import { Component, DestroyRef, OnInit, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, exhaustMap, switchMap } from 'rxjs';
import { Todo } from './todo/todo';
import { TodoCheckerComponent } from './todo/todo-checker/todo-checker.component';
import { TodoQuickAddComponent } from './todo/todo-quick-add/todo-quick-add.component';
import { TodosService } from './todo/todos.service';

@Component({
  selector: 'ws-root',
  standalone: true,
  template: `
    <div class="todo__app">
      <h1 class="todo__h1">Todos</h1>
      <ws-todo-quick-add (create)="todoCreationTrigger.next($event)" />
      <!-- TODO replace $index with todo.id -->
      @for(todo of todos(); track $index) {
      <ws-todo-checker [todo]="todo" (toggle)="toggleTodo($event)" />
      }
    </div>
  `,
  imports: [TodoCheckerComponent, TodoQuickAddComponent],
})
export class AppComponent implements OnInit {
  todos = signal<Todo[]>([]);

  todoCreationTrigger = new Subject<Todo>();

  readonly #todosService = inject(TodosService);
  readonly #destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.#todosService.list().subscribe(todos => this.todos.set(todos));

    this.setupTodoCreation();
  }

  toggleTodo(todoForUpdate: Todo) {
    this.todos.update(todos => {
      const index = todos.findIndex(todo => todo.text === todoForUpdate.text);

      if (index === -1) {
        return;
      }

      todos[index].isDone = !todos[index].isDone;

      return todos;
    });
  }

  private setupTodoCreation() {
    this.todoCreationTrigger
      .pipe(
        exhaustMap(todo => this.#todosService.create(todo)),
        switchMap(() => this.#todosService.list()),
        takeUntilDestroyed(this.#destroyRef)
      )
      .subscribe(todos => this.todos.set(todos));
  }
}
