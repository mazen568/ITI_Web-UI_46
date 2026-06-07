import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges } from '@angular/core';
import { TaskCardComponent } from '../task-card/task-card';
import { Task } from '../../models/task';
import { Operation } from '../../models/operation';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.html',
  imports: [TaskCardComponent],
  styleUrl: './task-list.css'
})
export class TaskListComponent implements OnChanges {
  tasks: Task[] = [];
  @Input() taskToProcess!: Task;
  @Output() performOperation = new EventEmitter<Operation>();
  @Output() editTask = new EventEmitter<Task>();
  @Output() cardDestroyed = new EventEmitter<string>();

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

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['taskToProcess'].firstChange) 
      return;
    this.addTask(this.taskToProcess);
    
  }

  onPerformOperation(data: Operation) {
    const task = this.tasks.find(t => t.id === data.id);
    if (data.action === 'toggle') {
      if (task) {
        task.completed = !task.completed;
      }
    }
    else if (data.action === 'delete') {
      this.tasks = this.tasks.filter(t => t.id !== data.id);
    }
    else if (data.action === 'edit') {
      if (task) {
        this.editTask.emit(task);
      }
    }
    this.performOperation.emit(data);
  }

  addTask(task: Task) {
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
    } else {
      this.tasks.push(task);
    }
  }



  
}
