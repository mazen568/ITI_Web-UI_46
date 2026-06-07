import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Ahmed Ali',
      description: 'Frontend Developer who loves Angular.'
    },
    {
      id: 2,
      name: 'Sara Mohamed',
      description: 'Backend Developer specializing in APIs.'
    }
  ];
}
