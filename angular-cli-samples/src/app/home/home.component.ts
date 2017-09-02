import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "app/services/authentication.service";

@Component({
  selector: 're-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'angular-cli-samples';
  currentUser:string = '';

  constructor(
    public authenticationService : AuthenticationService
  ) { }

  ngOnInit() {
    this.currentUser = this.authenticationService.GetCurrentUser();

    if(this.currentUser != null) this.currentUser = '[' + this.currentUser + ']';
  }

}
