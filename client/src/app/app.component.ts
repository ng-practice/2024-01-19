import { Component } from '@angular/core';
import { TodoCheckerComponent } from './todo/todo-checker/todo-checker.component';

@Component({
  selector: 'ws-root',
  standalone: true,
  imports: [TodoCheckerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  todo = { text: '🏃🏻‍♂️ Work out', isDone: true };

  notify(todo) {
    alert(`"${todo.text}" has been clicked.`);
  }
}
