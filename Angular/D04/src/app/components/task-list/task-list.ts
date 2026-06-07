import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card';
import { Task } from '../../models/task';
import { Operation } from '../../models/operation';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  imports: [TaskCardComponent],
  styleUrl: './task-list.css'
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Output() performOperation = new EventEmitter<Operation>();
  @Output() editTask = new EventEmitter<Task>();
  filter: 'all' | 'done' | 'todo' = 'all';

  get filteredTasks(): Task[] {
    if (this.filter === 'done') {
      return this.tasks.filter(t => t.completed);
    } else if (this.filter === 'todo') {
      return this.tasks.filter(t => !t.completed);
    }
    return this.tasks;
  }

  setFilter(status: 'all' | 'done' | 'todo') {
    this.filter = status;
  }

  onPerformOperation(data: Operation) {
    this.performOperation.emit(data);
  }

  
}
