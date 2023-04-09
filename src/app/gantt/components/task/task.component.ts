import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnChanges,
  OnInit,
  Renderer2,
  SimpleChanges,
} from '@angular/core';
import { Task } from 'src/app/models/Tasks';
import { DateHelperService } from 'src/app/services/date-helper.service';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskComponent implements OnInit {
  @Input() task!: Task;
  @Input() startMonth!: string;
  dateDifference = DateHelperService.dateDifference;
  dateDiff = 0;
  dateLeftOffset = 0;
  oldX = 0;
  oldLeft = '';
  numberOfTicks = 0;
  isMoving = false;

  constructor(
    private el: ElementRef,
    private ref: ChangeDetectorRef,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const date1 = new Date(`${this.startMonth} 1 ${new Date().getFullYear()}`);
    const date2 = new Date(this.task.created_at);
    this.dateLeftOffset = this.dateDiffInDays(date1, date2);
    if (this.task.deadline) {
      this.dateDiff = this.dateDiffInDays(
        new Date(this.task.created_at),
        new Date(this.task.deadline)
      );
    }
  }

  dateDiffInDays(a: any, b: any) {
    const _MS_PER_DAY = 1000 * 60 * 60 * 24;
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
    return Math.floor((utc2 - utc1) / _MS_PER_DAY);
  }

  mouseDown = ($event: MouseEvent) => {
    this.isMoving = true;
    this.oldX = $event.clientX;
    this.oldLeft = this.el.nativeElement.children[0].style.marginLeft;
    window.addEventListener('mousemove', this.moveHandler);
    window.addEventListener('mouseup', this.mouseUpHandler, { once: true });
  };

  mouseUpHandler = ($event: MouseEvent) => {
    this.isMoving = false;
    const distX = $event.clientX - this.oldX;
    const prevLeft = Number(this.oldLeft.substring(0, this.oldLeft.length - 2));
    const newLeft = prevLeft + distX;

    if (newLeft > prevLeft) {
      this.incrTaskDate(newLeft - prevLeft);
    } else {
      this.decrTaskDate((newLeft - prevLeft) * -1);
    }

    window.removeEventListener('mousemove', this.moveHandler);
    window.removeEventListener('mouseup', this.mouseUpHandler);
  };

  moveHandler = ($event: MouseEvent) => {
    $event.preventDefault();
    if (!this.isMoving) {
      return;
    }
    const distX = $event.clientX - this.oldX;
    const prevLeft = Number(this.oldLeft.substring(0, this.oldLeft.length - 2));
    const newLeft = prevLeft + distX;

    this.el.nativeElement.children[0].style.marginLeft = newLeft + 'px';
  };

  incrTaskDate = (diff: number) => {
    const steps = Math.round(diff / 33);
    if (steps == 0) {
      this.el.nativeElement.children[0].style.marginLeft =
        parseInt(this.el.nativeElement.children[0].style.marginLeft) -
        diff +
        'px';
      return;
    }
    let startDate = new Date(this.task.created_at);
    startDate.setDate(startDate.getDate() + steps);
    this.task.created_at = startDate;
    let deadlineDate = new Date(this.task.deadline as Date);
    deadlineDate.setDate(deadlineDate.getDate() + steps);
    this.task.deadline = deadlineDate;
    this.calculateTask(startDate, deadlineDate);
  };

  decrTaskDate = (diff: number) => {
    const steps = Math.round(diff / 33);
    if (steps == 0) {
      // this.el.nativeElement.children[0].style.marginLeft = diff * 33 + 'px';

      return;
    }
    let startDate = new Date(this.task.created_at);
    startDate.setDate(startDate.getDate() - steps);
    this.task.created_at = startDate;
    let deadlineDate = new Date(this.task.deadline as Date);
    deadlineDate.setDate(deadlineDate.getDate() - steps);
    this.task.deadline = deadlineDate;
    this.calculateTask(startDate, deadlineDate);
  };

  calculateTask = (newTaskStart: Date, newTaskDeadline: Date) => {
    const date1 = new Date(`${this.startMonth} 1 ${new Date().getFullYear()}`);
    const date2 = new Date(newTaskStart);
    this.dateLeftOffset = this.dateDiffInDays(date1, date2);
    if (this.task.deadline) {
      this.dateDiff = this.dateDiffInDays(
        new Date(newTaskStart),
        new Date(this.task.deadline)
      );
    }
    this.taskService
      .updateTask(this.task.id as number, {
        created_at: newTaskStart,
        deadline: newTaskDeadline,
      })
      .subscribe((data) => console.log(data));
    this.ref.markForCheck();
  };

  resizeMouseDown = ($event: MouseEvent) => {
    $event.stopPropagation();
    const element = this.el.nativeElement.children[0];
    const currentResizer = $event.target as HTMLElement;
    let prevX = $event.clientX;

    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    function mousemove($event: MouseEvent) {
      const rect = element.getBoundingClientRect();

      if (currentResizer?.classList.contains('right')) {
        element.style.width = rect.width - (prevX - $event.clientX) + 'px';
      }
      if (currentResizer?.classList.contains('left')) {
        console.log(prevX);
        
        element.style.width = rect.width + (prevX - $event.clientX) + 'px';
        element.style.marginLeft = rect.left - (prevX - $event.clientX) + 'px';
      }
      prevX = $event.clientX;
    }

    function mouseup() {
      window.removeEventListener('mousemove', mousemove);
      window.removeEventListener('mouseup', mouseup);
    }
  };
}
