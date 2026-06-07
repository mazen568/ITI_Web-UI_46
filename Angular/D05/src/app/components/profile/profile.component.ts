import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  id=''
  router= inject(ActivatedRoute);

  ngOnInit(){
    console.log(this.router.snapshot.params['id']);
    this.id=this.router.snapshot.params['id'];
    
  }

}
