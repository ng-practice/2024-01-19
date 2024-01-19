import { Component, EventEmitter, Output, input } from '@angular/core';
import { Todo } from './Todo';

@Component({
  selector: 'ws-todo-checker',
  standalone: true,
  imports: [],
  templateUrl: './todo-checker.component.html',
  styleUrl: './todo-checker.component.scss',
})
export class TodoCheckerComponent {
  todo = input.required<Todo>();

  @Output() toggle = new EventEmitter();

  emitToggle() {
    this.toggle.emit(this.todo());
  }
}
