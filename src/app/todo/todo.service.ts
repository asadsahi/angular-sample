import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  getTodots() {
    return [
      { id: 1, name: 'Eat' },
      { id: 2, name: 'Walk' },
    ];
  }
}
