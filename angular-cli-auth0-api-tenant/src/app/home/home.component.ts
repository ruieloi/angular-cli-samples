import { Component, OnInit } from '@angular/core';
import { AuthService } from 'app/auth/auth.service';

@Component({
  selector: 're-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  title = 'Angular Cli with Auth0 Tentant Sample';  

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

}
