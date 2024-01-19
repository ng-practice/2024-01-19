import { Component } from '@angular/core';
import { Todo } from './todo/todo';
import { TodoCheckerComponent } from './todo/todo-checker/todo-checker.component';
import { TodoQuickAddComponent } from './todo/todo-quick-add/todo-quick-add.component';

@Component({
  selector: 'ws-root',
  standalone: true,
  template: `
    <div class="todo__app">
      <h1 class="todo__h1">Todos</h1>
      <ws-todo-quick-add (create)="addTodo($event)" />
      <!-- TODO replace $index with todo.id -->
      @for(todo of todos; track $index) {
      <ws-todo-checker [todo]="todo" (toggle)="toggleTodo($event)" />
      }
    </div>
  `,
  styleUrls: ['./app.component.scss'],
  imports: [TodoCheckerComponent, TodoQuickAddComponent],
})
export class AppComponent {
  todos: Todo[] = [
    { text: '🏃🏻‍♂️ Work out', isDone: true },
    { text: '🍕 Make something to eat', isDone: false },
  ];

  addTodo(todo: Todo) {
    this.todos.unshift(todo);
  }

  toggleTodo(todoForUpdate: Todo) {
    const index = this.todos.findIndex(todo => todo.text === todoForUpdate.text);

    if (index === -1) {
      return;
    }

    this.todos[index].isDone = !this.todos[index].isDone;
  }
}
