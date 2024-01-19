import { Component, EventEmitter, Output, input } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'ws-todo-checker',
  standalone: true,
  template: `
    <div class="todo">
      <label class="todo__label">
        {{ todo().text }}
        <input type="checkbox" [checked]="todo().isDone" (change)="emitToggle()" />
        <span class="todo__checkmark"></span>
      </label>
    </div>
  `,
})
export class TodoCheckerComponent {
  todo = input.required<Todo>();

  @Output() toggle = new EventEmitter();

  emitToggle() {
    this.toggle.emit(this.todo());
  }
}
