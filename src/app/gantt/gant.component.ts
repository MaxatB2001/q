import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { TaskService } from '../services/task.service';
import { DateHelperService } from '../services/date-helper.service';
import { Task } from '../models/Tasks';
import { TaskSection } from '../models/task-section.model';
import { endDate, startDate, tasks } from '../data/tasks';
declare var PlainDraggable: any;
declare var LeaderLine: any;


@Component({
  selector: 'gant',
  templateUrl: './gant.component.html',
  styleUrls: ['./gant.component.css'],
})
export class GanttComponent implements OnInit, AfterViewInit {
  line: any
  @ViewChild('container', { static: true })
  public container: any;

  @ViewChild('draggable', { static: true })
  public handle: any;

  @ViewChild('draggable2', { static: true })
  public handle2: any;
  constructor(
    private taskService: TaskService,
    private dateHelperService: DateHelperService
  ) {}
  ngAfterViewInit(): void {
    
  }

  months: any[] = [];
  sections: TaskSection[] = [];
  tasks = tasks;

  ngOnInit(): void {
    // const container = this.container.nativeElement;
    // const handle = this.handle.nativeElement;
    // const handle2 = this.handle2.nativeElement
    // function init() {
    //   try {
    //     const line = new LeaderLine(handle, handle2, {
    //       size: 2,
    //       color: 'orange',
    //       path: 'fluid',
    //     });
    //     const draggable = new PlainDraggable(handle, {
    //       onMove: function() {
    //         line.position()
    //       }
    //     });
    //     const draggable2 = new PlainDraggable(handle2,{
    //       onMove: function() {
    //         line.position()
    //       }
    //     });
    //     draggable.onDrag = function (newPosition:any) {
    //       console.log(newPosition);
    //     };

    //   } catch (error) {
    //     setTimeout(init, 200);
    //   }
    // }
    // init();
    // const drag = new PlainDraggable()
    // console.log(drag);
    this.months = this.dateHelperService.getMonths(
      new Date(startDate),
      new Date(endDate)
    );
    this.taskService.getUserSections().subscribe(data => {
      console.log(data)
      this.sections = data.secitons
      this.months = this.dateHelperService.getMonths(new Date(data.startDate), new Date(data.endDate))
      console.log(this.dateHelperService.getMonths(new Date(data.startDate), new Date(data.endDate)))
    })
  }
}
