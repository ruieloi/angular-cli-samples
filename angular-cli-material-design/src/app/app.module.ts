import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './samples/buttons/buttons.component';
import { HomeComponent } from './home/home.component';

import { MaterialModule } from './material/material.module';
import { NavigationMenuComponent } from './pages/navigation-menu/navigation-menu.component';
import { BreadcrumbComponent } from './pages/breadcrumb/breadcrumb.component';
import { LanguagePickerComponent } from './pages/language-picker/language-picker.component';
import { HttpModule } from '@angular/http';
import { ProfileMenuComponent } from './pages/profile-menu/profile-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    HomeComponent,
    NavigationMenuComponent,
    BreadcrumbComponent,
    LanguagePickerComponent,
    ProfileMenuComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
