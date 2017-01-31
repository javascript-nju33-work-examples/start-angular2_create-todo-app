import {Component, ApplicationRef} from '@angular/core';
import {TodoService} from './todo.service';
import {Task} from './todo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todoItems: Task[]

  constructor(private todoService: TodoService) {
    this.todoService.init();
    this.todoItems = this.todoService.get();
  }

  handleTodoUpdate() {
    this.todoItems = this.todoService.get();
    this.todoService.save();
  }

  onTodoUpdate() {
    this.handleTodoUpdate();
  }

  onCompleteChange() {
    this.handleTodoUpdate();
  }
}
