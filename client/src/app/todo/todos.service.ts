import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable({ providedIn: 'root' })
export class TodosService {
  list(): Todo[] {
    return [
      { text: '🏃🏻‍♂️ Work out', isDone: true },
      { text: '🍕 Make something to eat', isDone: false },
      { text: '🏃🏻‍♂️ Work out', isDone: true },
      { text: '🍕 Make something to eat', isDone: false },
    ];
  }
}
