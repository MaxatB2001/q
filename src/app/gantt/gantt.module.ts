import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GanttRoutingModule } from './gantt-routing.module';
import { GanttComponent } from './gant.component';
import { TaskComponent } from './components/task/task.component';


@NgModule({
  declarations: [
    GanttComponent,
    TaskComponent
  ],
  imports: [
    CommonModule,
    GanttRoutingModule
  ]
})
export class GanttModule { }
