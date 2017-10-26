import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 're-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  showSearchBar:boolean = false;
  // Initialize isDarkTheme to false
  isDarkTheme: boolean = false;
  // Your code here



  changeTheme(): void {
      if (this.isDarkTheme) {
         this.isDarkTheme = false;
      } else {
         this.isDarkTheme = true;
      }
   }

}
