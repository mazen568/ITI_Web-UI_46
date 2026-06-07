import { Component } from '@angular/core';
import { DemoComponent } from './components/demo/demo.component';
import { OneComponent } from './components/one/one.component';
import { TwoComponent } from './components/two/two.component';
import { ThreeComponent } from './components/three/three.component';
@Component({
  selector: 'app-root',
  imports: [DemoComponent,OneComponent,TwoComponent,ThreeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  inputValue:string='';
  constructor() {
    // console.log("i am app and called");
  }

  storeVal(data:string){
    this.inputValue=data;
  }
}