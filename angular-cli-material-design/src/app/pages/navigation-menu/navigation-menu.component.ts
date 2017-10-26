import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'navigation-menu',
  templateUrl: './navigation-menu.component.html',
  styleUrls: ['./navigation-menu.component.scss']
})
export class NavigationMenuComponent implements OnInit {

  invert = false;

  collapsed:boolean = true;
  sidenavWidth = 4;

    constructor(private router : Router) { }

    ngOnInit() {
    }

    expand(){
      this.sidenavWidth = 15;
      this.collapsed = false;
      console.log("increase sidenav width");
    }
    collapse(){
      this.sidenavWidth = 4;
      this.collapsed = true;
      console.log("decrease sidenav width");
    }

    changeNavigationMenu(){
      if(this.collapsed){
        this.expand();
      }
      else
      {
        this.collapse();
      }
    }
}
