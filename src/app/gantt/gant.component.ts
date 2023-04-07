import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import { DateHelperService } from '../services/date-helper.service';
import { Task } from '../models/Tasks';
import { TaskSection } from '../models/task-section.model';

@Component({
  selector: 'gant',
  templateUrl: './gant.component.html',
  styleUrls: ['./gant.component.css']
})
export class GanttComponent implements OnInit {

  constructor(private taskService: TaskService, private dateHelperService: DateHelperService) {}

  months:any[] = []
  sections: TaskSection[] = []

  ngOnInit(): void {
    this.taskService.getUserSections().subscribe(data => {
      console.log(data)
      this.sections = data.secitons
      this.months = this.dateHelperService.getMonths(new Date(data.startDate), new Date(data.endDate))
      console.log(this.dateHelperService.getMonths(new Date(data.startDate), new Date(data.endDate)))
    })
  }
    
}