import { Component } from '@angular/core';

import { Task } from './models/task';
import { Operation } from './models/operation';
import { Notification } from './models/notification';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title: string = "";
  selectedTask: Task | null = null;
  taskToProcess!: Task;
  notifications: Notification[] = [];
  cardDestroyed: string = "";



  showNotification(message: string, type: 'success' | 'delete' | 'update' | 'undo') {
    const id = Date.now();
    this.notifications.push({ id, message, type });
  }

  removeNotification(id: number) {
    this.notifications = this.notifications.filter(n => n.id !== id);
  }

  onTaskAdded(task: Task) {

    const isUpdating = this.selectedTask ? true : false;

    this.taskToProcess = { ...task };
    console.log(task);

    if (isUpdating) {
      this.showNotification('Task updated successfully!', 'update');
    } else {
      this.showNotification('Task added successfully!', 'success');
    }

    this.selectedTask = null;
  }

  onPerformOperation(data: Operation) {
    if (data.action === 'toggle') {
      this.showNotification(`Task "${data.title}" status updated!`, 'update');
    }
    else if (data.action === 'delete') {
      this.showNotification(`Task "${data.title}" deleted successfully!`, 'delete');
    }
  }

  onEditTask(task: Task) {
    this.selectedTask = task;
  }

  onCardDestroyed(title: string) {
    this.cardDestroyed = title;
  }

}
