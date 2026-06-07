import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { CustomdirDirective } from "./directives/customdir.directive";
import { HeaderComponent } from './components/header/header.component';
import { PipetestComponent } from "./components/pipetest/pipetest.component";

@Component({
  selector: 'app-root',
  imports: [SignupComponent, HeaderComponent, RouterOutlet, PipetestComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'D05';
}
