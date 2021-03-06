import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {}

  get todos() {
    return this.todoService.getTodots();
  }
}
