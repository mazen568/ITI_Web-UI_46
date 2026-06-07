import { Component, inject, signal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { users } from '../../../users';
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  invalidCredentials = signal('');

  router = inject(Router)
  auth = inject(AuthService)


  onSubmit(form: NgForm) {
    if (form.valid) {
      this.auth.login(form.value.email, form.value.password).subscribe((users) => {
        console.log(users);
        if (users.length > 0) {
          const user = users[0];
          localStorage.setItem('user', JSON.stringify(user.name));
          this.router.navigate(['/lists']);
        } else {

          this.invalidCredentials.set('Invalid email or password');
        }
      });
    }
  }

  onInputChange() {
    this.invalidCredentials.set('');
  }
}
