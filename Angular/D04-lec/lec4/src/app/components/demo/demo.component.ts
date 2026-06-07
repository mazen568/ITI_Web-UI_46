import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-demo',
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css'
})
export class DemoComponent {

  title:string='demo component';
  @Input() message!:string;


  constructor() {
    // console.log("i am demo and called");
    // console.log(this.title);
    // console.log(this.message);
  }

  ngOnChanges(changes: SimpleChanges){
    // console.log("i am demo and changes happen");
    // console.log(this.message);
    // console.log(changes);
  }

  ngOnInit(){
    // console.log("i am demo and on init called");
    // console.log(this.message);

  }

}
