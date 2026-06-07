import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header';
import { TaskListComponent } from './components/task-list/task-list';
import { FooterComponent } from './components/footer/footer';
import { TaskInputComponent } from './components/task-input/task-input';
import { HomeComponent } from './components/home/home.component';
import { Task } from './models/task';
import { NotificationComponent } from './components/notification/notification.component';
import { Operation } from './models/operation';
import { Notification } from './models/notification';


@Component({
  selector: 'app-root',
  imports: [HeaderComponent, TaskListComponent, FooterComponent, TaskInputComponent, HomeComponent, NotificationComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks: Task[] = [];
  selectedTask: Task | null = null;
  notifications: Notification[] = [];

  showNotification(message: string, type: 'success' | 'delete' | 'update' | 'undo') {
    const id = Date.now();
    this.notifications.push({ id, message, type });
  }

  removeNotification(id: number) {
    this.notifications = this.notifications.filter(n => n.id !== id);
  }

  onTaskAdded(task: Task) {
    // console.log(task.id);
    const index = this.tasks.findIndex(t => t.id === task.id);
    if (index !== -1) {
      this.tasks[index] = task;
      this.showNotification('Task updated successfully!', 'update');
    } else {
      this.tasks.push(task);
      this.showNotification('Task added successfully!', 'success');
    }
    this.selectedTask = null;
  }

  onPerformOperation(data: Operation) {
    const task = this.tasks.find(t => t.id === data.id);
    if (data.action === 'toggle') {
      if (task) {
        task.completed = !task.completed;
        if (task.completed) {
          this.showNotification('Task marked as completed!', 'success');
        } else {
          this.showNotification('Task status undone!', 'undo');
        }
      }
    }
    else if (data.action === 'delete') {
      this.tasks = this.tasks.filter(t => t.id !== data.id);
      this.showNotification('Task deleted correctly!', 'delete');
    }
    else if (data.action === 'edit') {
      if (task) {
        this.selectedTask = task;
      }
    }
  }


}
