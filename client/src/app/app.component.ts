import { Component } from '@angular/core';
import { TodoCheckerComponent } from './todo/todo-checker/todo-checker.component';

@Component({
  selector: 'ws-root',
  standalone: true,
  imports: [TodoCheckerComponent],
  template: `
    <h1 class="todo__h1">Todos</h1>

    <!-- TODO replace $index with todo.id -->
    @for(todo of todos; track $index) {
    <ws-todo-checker [todo]="todo" (toggle)="toggleTodo($event)" />
    }
  `,
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todos = [
    { text: '🏃🏻‍♂️ Work out', isDone: true },
    { text: '🍕 Make something to eat', isDone: false },
  ];

  toggleTodo(todoForUpdate) {
    const index = this.todos.findIndex(todo => todo.text === todoForUpdate.text);

    if (index === -1) {
      return;
    }

    this.todos[index].isDone = !this.todos[index].isDone;
  }
}
