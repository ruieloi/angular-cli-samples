import { Component, OnInit } from '@angular/core';
import { AuthHttp } from 'angular2-jwt';
import { Http } from '@angular/http';
import { AuthService } from './../auth/auth.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-ping',
  templateUrl: './ping.component.html',
  styleUrls: ['./ping.component.scss']
})
export class PingComponent implements OnInit {

  API_URL = 'http://localhost:1479/api';
  message: string;

  constructor(public auth: AuthService, public http: Http, public authHttp: AuthHttp) {}

  ngOnInit() {
  }

  public ping(): void {
    this.message = '';
  
    this.http.get(`${this.API_URL}/ping`)
      .map(res => {
        console.log(res);
        return res.json();
      } )
      .subscribe(
        data => {
        console.log(data);
       this.message = data
      },
      
        error => this.message = error
      );
  }

  public securedPing(): void {
    this.message = '';
    console.log('private');
    this.authHttp.get(`${this.API_URL}/messages`)
      .map(res => res.json())
      .subscribe(
        data => 
        {
        console.log(data);
          this.message = data
      },
     
        error => this.message = error
      );
  }
}
