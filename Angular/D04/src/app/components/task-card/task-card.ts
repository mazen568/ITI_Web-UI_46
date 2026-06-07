import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../models/task';
import { Operation } from '../../models/operation';
import { IconComponent } from '../icon/icon.component';
@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.html',
  styleUrl: './task-card.css',
  imports: [IconComponent]
})
export class TaskCardComponent {
  @Input() task!: Task;
  @Output() performOperation = new EventEmitter<Operation>();
  @Output() edit = new EventEmitter<Task>();


  selectOperation(input: "toggle" | "delete" | "edit") {
    this.performOperation.emit({
      id: this.task.id,
      action: input
    });
  }
}
