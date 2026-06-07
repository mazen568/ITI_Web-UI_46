import { Component } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, ValidationErrors, Validators} from '@angular/forms';


function noSpace(control:AbstractControl) :ValidationErrors|null{
   return control.value.includes(" ")?{noSpace:true}:null
}

function matchPassword(control:AbstractControl) :ValidationErrors|null{
  const password = control.get('password')?.value;
  const confirmPassword = control.get('confirmPassword')?.value;

  return password === confirmPassword ? null : {passwordMismatch:true}
}

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  
  form = new FormGroup({
    username:new FormControl('',[Validators.minLength(3),Validators.required,noSpace]),
    email:new FormControl('',[Validators.email,Validators.required]),
    password:new FormControl('',[Validators.minLength(8),Validators.required]),
    confirmPassword:new FormControl('',[Validators.minLength(8),Validators.required])
  },
  {
    validators:matchPassword
  }
);

  handleSubmit() {
  //  event.preventDefault();
   console.log(this.form);
   //unlike template driven form we have to use e.preventDefault() to prevent the default behaviour of form submission
   //but we binded using formGroup so we can remvoe the e.preventDefault() and it will work as expected
   
  }

}
