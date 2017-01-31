import {Pipe, PipeTransform} from '@angular/core';
import {Task} from './todo.service';

@Pipe({
  name: 'completeLength',
  pure: false
})
export class CompleteLengthPipe implements PipeTransform {
  transform(todoItems: Task[]): number {
    return todoItems.filter(task => task.done).length;
  }
}
