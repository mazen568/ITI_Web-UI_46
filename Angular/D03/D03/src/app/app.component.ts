import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormComponent } from './components/form/form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports:[CommonModule,FormComponent]
})
export class AppComponent {
  title = 'D03';
  // show=true;

  // getInputs(data:any){
  //   console.log(data[0].value);
    

  // }

  stdArr=[
    {
      id:1,
      fname:"ali",
      lname:"hossam"
    },
    {
      id:2,
      fname:"ahmed",
      lname:"mazen"
    },{
      id:3,
      fname:"sami",
      lname:"carlos"
    },
    
  ]


  trackByFn(index:number){
     console.log(index);
     return index;
  }
}

//kol 7aga fe angular 3obara 3n class zy el component leha decortator by3rfna eno component
//directives => class leha decorator by3rfha en hya directive
//directive can add behavior or modfiy dom element (added as an attribute)
//we have 3 types
//1-component directive => regular component in angular is called a component directive => class decorated with @component decorator
//has selector , template , logic , can interact with dom and other components

//2-attribute directives => 
//-ngModel => 2 way binding
//-ngClass da grandparent of the [class]
//-ngStyle

//3-structral directive =>
//-ngIf
//-ngFor
//-ngSwitch => self study
//<ng-template> => container for html code => will not be rendered(elements inside the two tags)
//will be rendered based on instructions: 


// <ng-template>
// <p>hello</p>
// </ng-template>

//template reference variable bthkhlek t access the element nfso

