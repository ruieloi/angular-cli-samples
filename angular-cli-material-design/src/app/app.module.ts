import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './samples/buttons/buttons.component';
import { HomeComponent } from './home/home.component';

import { MaterialModule } from './material/material.module';
import { NavigationMenuComponent } from './pages/navigation-menu/navigation-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    HomeComponent,
    NavigationMenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
