import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from "app/samples/buttons/buttons.component";
import { HomeComponent } from "app/home/home.component";

const routes: Routes = [
 { 
    path: 'samples', 
    component: ButtonsComponent ,
    data: {
      breadcrumb: "samples"
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'buttons',
        data: {
          breadcrumb: "buttons"
        },
    },
    {
      path: "buttons",
      component: ButtonsComponent,
      data: {
        breadcrumb: "buttons"
      }
    }
    ]
 },
 { path: '', component: HomeComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
