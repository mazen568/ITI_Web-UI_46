import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseUrl = 'http://localhost:5050';

  getAllTasks(){
    return fetch(`${this.baseUrl}/tasks`)
    .then(res=>res.json())
    .then( data=>{
      return data;
    })
    .catch(err=>{
      console.log(err);
    });
  }

}
