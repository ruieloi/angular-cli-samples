import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from "app/services/authentication.service";
import { NotificationsService } from "angular2-notifications";


@Component({
  selector: 're-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit() {
    this.authenticationService.logout();

  }

  login() {
    this.loading = true;

    this.authenticationService.login(this.model.username, this.model.password)
      .then(data => {
        this.router.navigate(['/']);
      })
      .catch(error => {
        const toast = this.notificationsService.error('Error!', error, {
          timeOut: 3000,
          pauseOnHover: true,
          clickToClose: true
        });
        this.loading = false;
      });
  }

}
