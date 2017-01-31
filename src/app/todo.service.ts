import {Injectable, ApplicationRef} from '@angular/core';

export const LOCALSTRAGE_KEY = 'javascript.nju33.work/start-angular2';

export class Task {
  constructor(public content: string, public done: boolean = false) {}
}

@Injectable()
export class TodoService {
  private tasks: Task[]

  constructor() {
    const item = localStorage.getItem(LOCALSTRAGE_KEY);
    if (item) {
      this.tasks = JSON.parse(item);
    } else {
      this.tasks = [];
    }
  }

  init() {
    this.tasks = this.tasks.filter(task => !task.done);
    this.save();
  }

  add(content: string) {
    this.tasks.unshift(new Task(content));
  }

  get(): Task[] {
    return this.tasks;
  }

  remove(index: number) {
    this.tasks.splice(index, 1);
  }

  save(): void {
    localStorage.setItem(LOCALSTRAGE_KEY, JSON.stringify(this.tasks));
  }
}
