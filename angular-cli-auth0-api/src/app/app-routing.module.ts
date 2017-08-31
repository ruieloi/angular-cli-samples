import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CallbackComponent } from 'app/callback/callback.component';
import { HomeComponent } from 'app/home/home.component';
import { ProfileComponent } from 'app/profile/profile.component';
import { PingComponent } from 'app/ping/ping.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'callback', component: CallbackComponent },
  { path: 'home', component: HomeComponent },
  { path: 'ping', component: PingComponent },
  { path: 'profile', component: ProfileComponent }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
