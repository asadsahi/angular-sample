import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts() {
    return [
      { id: 1, name: 'Book' },
      { id: 2, name: 'Pen' },
    ];
  }
}
