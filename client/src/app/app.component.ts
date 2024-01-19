import { Component, OnInit, inject, signal } from '@angular/core';
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
      <ws-todo-quick-add (create)="addTodo($event)" />
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

  readonly #todosService = inject(TodosService);

  ngOnInit() {
    this.todos.set(this.#todosService.list());
  }

  addTodo(todo: Todo) {
    this.todos.update(todos => [todo, ...todos]);
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
}
