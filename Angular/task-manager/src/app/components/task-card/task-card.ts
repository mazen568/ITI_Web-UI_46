import { Component, EventEmitter, Input, Output, OnDestroy } from '@angular/core';
import { Task } from '../../models/task';
import { Operation } from '../../models/operation';
import { IconComponent } from '../icon/icon.component';
@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
  imports: [IconComponent]
})
export class TaskCardComponent implements OnDestroy {
  @Input() task!: Task;
  @Output() performOperation = new EventEmitter<Operation>();
  @Output() edit = new EventEmitter<Task>();
  @Output() cardDestroyed = new EventEmitter<string>();


  selectOperation(input: "toggle" | "delete" | "edit") {
    this.performOperation.emit({
      id: this.task.id,
      action: input,
      title: this.task.title
    });
  }

  ngOnDestroy(): void {
    this.cardDestroyed.emit(`Task "${this.task.title}" deleted successfully!`);
    // console.log(this.task.title);
  }


}
