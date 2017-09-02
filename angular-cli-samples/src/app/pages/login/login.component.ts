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
    if (this.authenticationService.login(this.model.username, this.model.password)) {
      this.loading = false;
      
      this.router.navigate(['/']);
      
      const toast = this.notificationsService.success('Login OK!', 'Click to go back', {
        timeOut: 3000,
        pauseOnHover: true,
        clickToClose: true
      });

      
    }
    else {
      this.loading = false;

      const toast = this.notificationsService.error('Error!', 'Something happened!', {
        timeOut: 2000,
        pauseOnHover: true,
        clickToClose: true
      });

      
      
    }
  }

}
