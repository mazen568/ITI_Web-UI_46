import { Component } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  handleSubmit(form:NgForm,email:NgModel) {
    // Handle form submission logic here
    // console.log('Email:', this.email);
    // console.log('Password:', this.password);
    console.log(form);
    console.log(email);
    
    
  }
}
