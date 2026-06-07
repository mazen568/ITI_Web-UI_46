import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustompipePipe } from '../../custompipe.pipe';

@Component({
  selector: 'app-pipetest',
  imports: [CommonModule,CustompipePipe],
  templateUrl: './pipetest.component.html',
  styleUrl: './pipetest.component.css'
})
export class PipetestComponent {
  name = 'Mazen Raafat';
  today = new Date();
  price=1000;
  arrOb=[
    {name:'mazen',age:30},
    {name:'ahmed',age:25},
    {name:'ahmed',age:25},
    {name:'ahmed',age:25},
    {name:'ahmed',age:25},
    {name:'ahmed',age:25},
    {name:'ahmed',age:25},
    {name:'ahmed',age:25},
    {name:'ahmed',age:25},
    {name:'ahmed',age:25},
    {name:'ahmed',age:25},
    {name:'ahmed',age:25},
    {name:'ahmed',age:25},
  ];

  promiseVar= new Promise((resolve,reject)=>{
    resolve('jaklsdjalskjdas')
  });


  // get getPromise(){
  //   let data =' ';
  //   this.promiseVar.then(d=>{
  //     console.log(d);
  //     data=d as string;
      
  //   })

  //   return data;
  // }



  // async ngOnInit() {
  //   let data = await this.promiseVar;
  //   console.log(data);
  // }
}
