import { Injectable, inject } from '@angular/core';
import { Todo } from './todo';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({ providedIn: 'root' })
export class TodosService {
  readonly #http = inject(HttpClient);

  list(): Observable<Todo[]> {
    return this.#http.get<Todo[]>(environment.apiEndpoint);
  }
}
