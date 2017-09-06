import { Component } from '@angular/core';
import { AuthenticationService } from "app/services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'RE-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    public authenticationService : AuthenticationService,
    public router: Router
  ) { }

  btnLogoutClick= function () {
        //removes user from memory
        this.authenticationService.logout();
        window.location.reload();
  };
}
