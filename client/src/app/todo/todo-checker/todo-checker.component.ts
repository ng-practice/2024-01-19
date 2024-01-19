import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ws-todo-checker',
  standalone: true,
  imports: [],
  templateUrl: './todo-checker.component.html',
  styleUrl: './todo-checker.component.scss',
})
export class TodoCheckerComponent {
  @Input() todo = { text: '-', isDone: false };

  @Output() toggle = new EventEmitter();

  emitToggle() {
    this.toggle.emit(this.todo);
  }
}
