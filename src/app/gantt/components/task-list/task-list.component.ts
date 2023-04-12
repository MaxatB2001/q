import { Component, Input } from '@angular/core';
import { NewTask } from 'src/app/models/NewTask';
import { TaskSection } from 'src/app/models/task-section.model';

@Component({
  selector: 'task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {
  @Input() tasks: NewTask[] = []

  changeTask = (id: any) => {
    const task = this.tasks.find(task => task.id == id);
    (task as NewTask).showChildrens = !task?.showChildrens
  }
}
