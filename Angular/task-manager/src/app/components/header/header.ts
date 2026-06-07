import { Component, inject } from '@angular/core';
import { TimerComponent } from './timer/timer';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class HeaderComponent {
  isTimerVisible: boolean = false;
  router = inject(Router);

  get isLoggedIn(): boolean {
    return localStorage.getItem('username') ? true : false;
  }

  get username(): string | null {
    return localStorage.getItem('username');
  }

  // toggleTimer(): void {
  //   this.isTimerVisible = !this.isTimerVisible;
  // }

  logout(): void {
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}
