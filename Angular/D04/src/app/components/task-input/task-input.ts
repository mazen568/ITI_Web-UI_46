import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task';
import { Error } from '../../models/error';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.html',
  styleUrl: './task-input.css',
  imports: [FormsModule]
})
export class TaskInputComponent {
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

  taskToUpdate: Task | null = null;
  @Input()
  set task(value: Task | null) {
    this.taskToUpdate = value;
    if (value) {
      this.title = value.title;
      this.description = value.description;
      this.priority = value.priority;
      this.dueDate = value.dueDate;
      this.category = value.category;
      this.tags = value.tags;
    }
  }

  @Output() taskAdded = new EventEmitter<Task>();

  addTask() {
    this.error.state = false;

    const task: Task = {
      id: this.taskToUpdate ? this.taskToUpdate.id : Date.now().toString(),
      title: this.title,
      description: this.description,
      priority: this.priority,
      dueDate: this.dueDate,
      category: this.category,
      tags: this.tags,
      completed: false
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
