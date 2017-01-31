import {Component, Input, Output, EventEmitter, OnInit, DoCheck, KeyValueDiffers} from '@angular/core';
import {TodoService, Task} from '../todo.service';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit, DoCheck {
  @Input() todoItems: Task[];
  @Output() completeChange: EventEmitter<Task> = new EventEmitter();
  private todoDiffers: any[];

  constructor(private differs: KeyValueDiffers) {}

  ngOnInit() {
    this.todoDiffers = this.todoItems.map(item => {
      return this.differs.find(item).create(null);
    });
  }

  ngDoCheck() {
    const changesArr = this.todoItems.filter((item, i) => {
      if (typeof this.todoDiffers[i] === 'undefined') {
        this.todoDiffers.unshift(this.differs.find(item).create(null));
        return item;
      }
      const changes = this.todoDiffers[i].diff(item);
      return changes;
    });

    if (changesArr.length > 0) {
      this.completeChange.emit();
    }
  }

  onChange(task: Task) {
    task.done = !task.done;
  }
}
