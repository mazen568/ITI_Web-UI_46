import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {


  private baseUrl = 'http://localhost:3000/tasks';
  http = inject(HttpClient);

  getAllTasks(userId: number) {
    return this.http.get<Task[]>(`${this.baseUrl}?userId=${userId}`);
  }

  addTask(task: Task, userId: number) {
    return this.http.post<Task>(this.baseUrl, {
      ...task,
      userId
    });
  }

  deleteTask(id: number) {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }

  updateTask(task: Task) {
    return this.http.put<Task>(`${this.baseUrl}/${task.id}`, task);
  }

}
