import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from 'app/pages/breadcrumb/ibreadcrumb';
import { ActivatedRoute, NavigationEnd, Router, PRIMARY_OUTLET } from '@angular/router';
import "rxjs/add/operator/filter";

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit {

  public breadcrumbs: IBreadcrumb[];
  public currentRoute: string = '';

    constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router
    ) {
      this.breadcrumbs = [];
    }

    ngOnInit() {
      const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

      //subscribe to the NavigationEnd event
      this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {

        console.log("route changed");
        //set breadcrumbs
        let root: ActivatedRoute = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);

        if(this.breadcrumbs.length > 1){
          this.currentRoute = this.breadcrumbs.slice(-1)[0].label;

        }
        else{
          this.currentRoute = 'Home';
        }

        console.log(this.currentRoute);

      });
    }

    canShowBreadcrumb() {
      console.log(this.currentRoute);
      if(this.currentRoute == null || this.currentRoute == 'Home')
      {
        return false;
      }

      return true;
    }

    private getBreadcrumbs(route: ActivatedRoute, url: string="", breadcrumbs: IBreadcrumb[]=[]): IBreadcrumb[] {
      const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

      //get the child routes
      let children: ActivatedRoute[] = route.children;

      //return if there are no more children
      if (children.length === 0) {
        return breadcrumbs;
      }

      //iterate over each children
      for (let child of children) {
        //verify primary route
        if (child.outlet !== PRIMARY_OUTLET) {
          continue;
        }

        //verify the custom data property "breadcrumb" is specified on the route
        if (!child.snapshot.data.hasOwnProperty(ROUTE_DATA_BREADCRUMB)) {
          return this.getBreadcrumbs(child, url, breadcrumbs);
        }

        //get the route's URL segment
        let routeURL: string = child.snapshot.url.map(segment => segment.path).join("/");

        //append route URL to URL
        url += `/${routeURL}`;

        //add breadcrumb
        let breadcrumb: IBreadcrumb = {
          label: child.snapshot.data[ROUTE_DATA_BREADCRUMB],
          params: child.snapshot.params,
          url: url
        };
        breadcrumbs.push(breadcrumb);

        //recursive
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      //we should never get here, but just in case
      return breadcrumbs;
    }
}
