import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { LoginComponent } from "app/pages/login/login.component";
import { UserListComponent } from "app/pages/users/user-list/user-list.component";
import { AuthGuard } from "app/common/guards/auth.guard";
import { RegisterComponent } from "app/pages/register/register.component";
import { SimplefieldsComponent } from "app/pages/form/simplefields/simplefields.component";
import { SubscriptionListComponent } from "app/pages/subscription/subscription-list/subscription-list.component";
import { UserformComponent } from "app/pages/users/userform/userform.component";

const routes: Routes = [

  { path: 'userlist', component: UserListComponent, canActivate: [AuthGuard] },
  { path: 'userform', component: UserformComponent },
  { path: 'simplefields', component: SimplefieldsComponent },
  { path: 'subscriptionList', component: SubscriptionListComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component:HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
