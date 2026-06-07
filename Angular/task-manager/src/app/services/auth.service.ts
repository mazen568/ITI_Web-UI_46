import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../models/user';
import { map, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl = 'http://localhost:3000/users';
  http = inject(HttpClient);

  register(user: User) {
    return this.http.post<User>(this.baseUrl, user);
  }

  login(email: string, password: string) {
    return this.http.get<User[]>(
      `${this.baseUrl}?email=${email}&password=${password}`
    );
  }

  logout() {
    localStorage.removeItem('user');
  }

  isLoggedIn() {
    return localStorage.getItem('user') !== null;
  }

  getCurrentUser() {
    return localStorage.getItem('user');
  }

}
