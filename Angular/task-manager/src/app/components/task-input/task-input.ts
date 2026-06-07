import { Component, EventEmitter, Input, Output, OnChanges, SimpleChanges, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task';
import { Error } from '../../models/error';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.html',
  styleUrl: './task-input.css',
  imports: [FormsModule]
})
export class TaskInputComponent implements OnChanges {
  title: string = ""
  description: string = ""
  priority: string = "low"
  dueDate: string = ""
  category: string = "work"
  tags: string = ""

  error: Error = {
    message: '',
    state: false,
  };

  
  authService = inject(AuthService);
  @Input() task: Task | null = null;

  ngOnChanges(changes: SimpleChanges) {
      if (this.task) {
        this.title = this.task.title;
        this.description = this.task.description;
        this.priority = this.task.priority;
        this.dueDate = this.task.dueDate;
        this.category = this.task.category;
        this.tags = this.task.tags;
    }
  }

  @Output() taskAdded = new EventEmitter<Task>();

  addTask() {
    this.error.state = false;

    const task: Task = {
      id: this.task ? this.task.id : Date.now(),
      title: this.title,
      description: this.description,
      priority: this.priority,
      dueDate: this.dueDate,
      category: this.category,
      tags: this.tags,
      userId: this.task ? this.task.userId : JSON.parse(this.authService.getCurrentUser()!).id,
      completed: this.task ? this.task.completed : false
    };

    for (let key in task) {
      let k = key as keyof Task;
      if (task[k] === '') {
        this.error.state = true;
        this.error.message = `Please fill the field: ${key}`;
        return;
      }
    }

    this.taskAdded.emit(task);
    this.resetForm();
  }

  resetForm() {
    this.title = "";
    this.description = "";
    this.priority = "low";
    this.dueDate = "";
    this.category = "work";
    this.tags = "";
  }
}
