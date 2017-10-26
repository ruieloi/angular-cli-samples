import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonsComponent } from "app/samples/buttons/buttons.component";
import { HomeComponent } from "app/home/home.component";
import { TodoPageComponent } from 'app/samples/todo/todo-page/todo-page.component';

const routes: Routes = [
 {
    path: 'samples',
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
    },
    {
      path: "todo",
      component: TodoPageComponent,
      data: {
        breadcrumb: "todo"
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
