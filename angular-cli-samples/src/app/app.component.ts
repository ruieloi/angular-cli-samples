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
  

  btnLoginClick= function () {
        this.router.navigate(['/login']);
  };

  btnLogoutClick= function () {
        this.authenticationService.logout();
        window.location.reload();
  };
}
