import {UsersService} from '../services/userService';
import {Component} from "angular2/core";


// src/app/users/users.component.ts
@Component({
  selector: 'users',
  providers: [
    UsersService
  ],
  styles: [`
    .superuser {
      background-color: #eee;
    }
  `],
  template: `
    <h1>Users</h1>
    <table class="table">
      <thead>
        <tr>
          <th>id</th>
          <th>Username</th>
          <th>Roles</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="#user of userslist" [class.superuser]="user.superuser">
          <td>{{user.id}}</td>
          <td (click)="onClick(user.username)">{{user.username}} <span *ngIf="user.superuser">(superuser)</span></td>
          <td>{{user.roles.join(', ')}}</td>
        </tr>
      </tbody>
    </table>
  `
})
export class Users {
  private userslist;
  constructor(users: UsersService) {
    users.get().subscribe(data => this.userslist = data.users);
  }
}
