import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GanttRoutingModule } from './gantt-routing.module';
import { GanttComponent } from './gant.component';
import { TaskComponent } from './components/task/task.component';
import { TaskListComponent } from './components/task-list/task-list.component';


@NgModule({
  declarations: [
    GanttComponent,
    TaskComponent,
    TaskListComponent
  ],
  imports: [
    CommonModule,
    GanttRoutingModule
  ]
})
export class GanttModule { }
