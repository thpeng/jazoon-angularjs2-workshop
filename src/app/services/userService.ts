// src/app/services/usersService.ts
import {Http} from 'angular2/http';
import {Inject, Injectable} from 'angular2/core';

@Injectable()
export class UsersService {
  private _users; //class property
  constructor(@Inject(Http) public http: Http) {
    this.http = http;

  }

  get() {
    return this.http.get('/assets/users.json')
      .map(response => response.json());

  }
}
