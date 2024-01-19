import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { TodoCheckerComponent } from './todo/todo-checker/todo-checker.component';

@Component({
  selector: 'ws-root',
  standalone: true,
  imports: [NgFor, TodoCheckerComponent],
  templateUrl: './app.component.html',
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
