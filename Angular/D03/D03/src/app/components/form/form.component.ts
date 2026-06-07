import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { Product } from '../../types';

@Component({
  selector: 'app-form',
  imports: [FormsModule],
  templateUrl: './form.component.html',
  styles: ``
})
export class FormComponent {
  obj:Product={
    id:'',
    name:'',
    category:'',
    description:'',
    price:0,
    quantity:0,
    imageUrl:'',
    isInCart:false,
    status:'active'
  }


  setProduct(){
    console.log(this.obj);
    
  }
}
