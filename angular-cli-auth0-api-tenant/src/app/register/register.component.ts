import { Component, OnInit } from '@angular/core';
import { AuthService } from "app/auth/auth.service";
import { AuthHttp } from "angular2-jwt/angular2-jwt";
import { Http } from '@angular/http';
import { RegisterUserModel } from "app/register/models/registerUserModel";

@Component({
  selector: 're-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  constructor(public auth: AuthService, public http: Http, public authHttp: AuthHttp) {}

  model: RegisterUserModel = new RegisterUserModel('a', 'b', 'c', 'd');
  loading = false;

  ngOnInit() {
  }

  register() {
        this.loading = true;

        alert(this.model.email);
        // this.userService.create(this.model)
        //     .subscribe(
        //         data => {
        //             this.alertService.success('Registration successful', true);
        //             this.router.navigate(['/login']);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }

}
