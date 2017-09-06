import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from "app/services/authentication.service";
import { User } from "app/common/userModel";

@Component({
  selector: 're-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  title = 'angular-cli-samples';
  currentUser:User;

  constructor(
    public authenticationService : AuthenticationService
  ) { }

  ngOnInit() {
    this.currentUser = JSON.parse(this.authenticationService.GetCurrentUser()) as User;

    if(this.currentUser == null)
    {
      this.currentUser = new User(0, '', '', '');
    }
    else
    {
      this.currentUser.name = '[' + this.currentUser.name + ']';
    }
  }

}
