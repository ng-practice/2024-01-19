import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'ws-todo-quick-add',
  standalone: true,
  template: `
    <input
      #inputTodoText
      type="text"
      class="todo__input"
      placeholder="What needs to be done?"
      (keydown.enter)="emitCreate(inputTodoText)"
    />

    <button (click)="emitCreate(inputTodoText)" class="todo__button--primary">Add</button>
  `,
})
export class TodoQuickAddComponent {
  @Output() create = new EventEmitter<Todo>();

  emitCreate(inputElement: HTMLInputElement) {
    this.create.emit({ text: inputElement.value, isDone: false });

    inputElement.value = '';
  }
}
