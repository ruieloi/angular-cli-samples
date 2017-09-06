import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { SimpleNotificationsModule } from 'angular2-notifications';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api/in-memory-web-api.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthenticationService } from "app/services/authentication.service";
import { InMemUserService } from "app/services/inMemUser.service";
import { UserListComponent } from './pages/users/user-list/user-list.component';
import { AuthGuard } from "app/common/guards/auth.guard";
import { RegisterComponent } from './pages/register/register.component';
import { UserformComponent } from './pages/users/userform/userform.component';
import { SimplefieldsComponent } from './pages/form/simplefields/simplefields.component';
import { SubscriptionListComponent } from './pages/subscription/subscription-list/subscription-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    UserListComponent,
    RegisterComponent,
    UserformComponent,
    SimplefieldsComponent,
    SubscriptionListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    SimpleNotificationsModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemUserService)
  ],
  providers: [
    AuthenticationService,
    AuthGuard
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
