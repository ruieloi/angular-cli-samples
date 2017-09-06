import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

import { User } from "app/common/userModel";

@Injectable()
export class AuthenticationService {

  constructor(private http: Http) { }

  isAuthenticated() {
    return localStorage.getItem('currentUser') != null;
  }

  GetCurrentUser() {
    return localStorage.getItem('currentUser');
  }

  login(username: string, password: string): Promise<User> {
    var url = `$'api/users/?username=${username}&password=${password}`;
    return this.http.get(url)
      .toPromise()
      .then(response => {
        if (response.json().data != null && response.json().data.length > 0) {
          var userArray = response.json().data as User[];
          var user = userArray[0];
          localStorage.setItem('currentUser', JSON.stringify(user));
          return user;
        }
        else
          throw new Error('User/Password invalid');
      }
      )
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUser');
  }
}
