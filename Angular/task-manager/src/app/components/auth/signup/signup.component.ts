import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  router = inject(Router);
  auth = inject(AuthService);
  errorMessage = signal('');


  form = new FormGroup({
    username: new FormControl('', [Validators.minLength(3), Validators.required, this.noSpace]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required]),
    confirmPassword: new FormControl('', [Validators.minLength(8), Validators.required])
  },
    {
      validators: this.matchPasswordValidator
    }
  );


  noSpace(control: AbstractControl): ValidationErrors | null {
    return control.value.includes(" ") ? { noSpace: true } : null
  }

  matchPasswordValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { passwordMismatch: true }
  }


  get username() {
    return this.form.get('username');
  }

  get email() {
    return this.form.get('email');
  }

  get password() {
    return this.form.get('password');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

  onSubmit(): void {
    if (this.form.valid) {
      const user: User = {
        name: this.form.value.username!,
        email: this.form.value.email!,
        password: this.form.value.password!
      };

      this.auth.login(user.email, user.password).subscribe((users) => {
        if (users.length > 0) {
          this.errorMessage.set('User already exists');
        } else {
          this.auth.register(user).subscribe(() => {
            this.errorMessage.set('');
            this.router.navigate(['/login']);
          });
        }
      });
    }
  }

}
