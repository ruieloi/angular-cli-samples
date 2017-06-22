import { Component } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 're-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Angular Cli with Auth0 sample';

  constructor(public auth: AuthService) {
    auth.handleAuthentication();
  }
}
