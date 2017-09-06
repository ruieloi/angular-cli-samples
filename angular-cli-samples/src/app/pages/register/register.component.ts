import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from "app/services/authentication.service";
import { NotificationsService } from "angular2-notifications";
import { User } from "app/common/userModel";

@Component({
  selector: 're-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    model: any = {};
    loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private notificationsService: NotificationsService
  ) { }

  ngOnInit() {
  }

    register() {
        this.loading = true;

        var registerUser: User = {
            id: 0,
            username: this.model.username,
            password: this.model.password,
            name: this.model.name
        }

         const toast = this.notificationsService.success('User Registered!', 'This is a simulation, no user was added into source', {
          timeOut: 3000,
          pauseOnHover: true,
          clickToClose: true
        });

        //TODO call api to store data.
        this.router.navigate(['/login']);
    }



}
