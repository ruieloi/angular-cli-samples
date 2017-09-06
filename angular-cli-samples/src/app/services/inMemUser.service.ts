import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { User } from "app/common/userModel";
import { InMemoryDbService } from 'angular-in-memory-web-api';

export class  InMemUserService implements InMemoryDbService {

    createDb() {
      let users: User[] = [
        { id: 1, username: 'admin', password:'admin', name:'Administrator' },
        { id: 2, username: 'user', password:'user', name:'User' },
        { id: 3, username: 'colaborator', password:'12345', name:'Colaborator' }
      ];
      return {users};
    }
}
