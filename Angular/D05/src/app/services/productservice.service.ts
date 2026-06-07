import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' //means we can inject this service in any component
})
export class ProductserviceService {
   products :{
    id:number,
    name:string,
    price:number,
    quantity:number
   }[]=[];

   getAllProducts(){
    return this.products;
   }

    addProduct(product:{id:number,name:string,price:number,quantity:number}){
      this.products.push(product);
    }
}
