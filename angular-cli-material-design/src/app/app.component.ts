import { Component } from '@angular/core';

@Component({
  selector: 're-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
