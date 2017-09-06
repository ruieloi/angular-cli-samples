import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "app/home/home.component";
import { LoginComponent } from "app/pages/login/login.component";

const routes: Routes = [

  //{ path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
   { path: '', component:HomeComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
