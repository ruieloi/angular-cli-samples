import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material/material.module';
import { HttpModule } from '@angular/http';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonsComponent } from './samples/buttons/buttons.component';
import { HomeComponent } from './home/home.component';
import { NavigationMenuComponent } from './pages/navigation-menu/navigation-menu.component';
import { BreadcrumbComponent } from './pages/breadcrumb/breadcrumb.component';
import { LanguagePickerComponent } from './pages/language-picker/language-picker.component';
import { ProfileMenuComponent } from './pages/profile-menu/profile-menu.component';
import { HttpLoaderFactory } from 'app/translations/translation.factory';
import { SharedModule } from 'app/shared/shared/shared.module';
import { SearchbarComponent } from './pages/searchbar/searchbar.component';




@NgModule({
  declarations: [
    AppComponent,
    ButtonsComponent,
    HomeComponent,
    NavigationMenuComponent,
    BreadcrumbComponent,
    LanguagePickerComponent,
    ProfileMenuComponent,
    SearchbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    HttpModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
    }),
    SharedModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
