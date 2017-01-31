import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {TodoService} from '../todo.service';

@Component({
  selector: 'todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {
  @Output() todoUpdate: EventEmitter<any> = new EventEmitter();
  private todoForm: FormGroup;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todoForm = new FormGroup({
      content: new FormControl('', Validators.required)
    });
  }

  onSubmit(formValue: {content: string}) {
    this.todoService.add(formValue.content);
    this.todoForm.reset();
    this.todoUpdate.emit();
  }
}
