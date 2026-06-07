import { Component,NgZone } from '@angular/core';

@Component({
  selector: 'app-one',
  imports: [],
  templateUrl: './one.component.html',
  styleUrl: './one.component.css'
})
export class OneComponent {

  constructor(private zone:NgZone) {

  }

  count!:number;
   inc(){
    ++this.count;
   }

   get dis(){
    console.log("one component");
    return ''
    
   }

   ngOnInit() {
    // this.zone.runOutsideAngular(() => {
    //   setInterval(() => {
    //     console.log("i am outside angular");
    //   }, 1000);
    // });
  }





}
