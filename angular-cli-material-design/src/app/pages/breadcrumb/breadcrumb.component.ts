import { Component, OnInit } from '@angular/core';
import { IBreadcrumb } from 'app/pages/breadcrumb/ibreadcrumb';
import { ActivatedRoute, NavigationEnd, Router, PRIMARY_OUTLET } from '@angular/router';
import "rxjs/add/operator/filter";
import { ROUTE_HOME } from 'app/constants';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})


export class BreadcrumbComponent implements OnInit {

  public breadcrumbs: IBreadcrumb[];
  public currentRoute: IBreadcrumb= {
    label: 'Home',
    url: 'Home',
    code: 'Home'
  };

    constructor(
      private activatedRoute: ActivatedRoute,
      private router: Router,
      private translate: TranslateService
    ) {
      this.breadcrumbs = [];
    }

    ngOnInit() {
      const ROUTE_DATA_BREADCRUMB: string = "breadcrumb";

      //subscribe to the NavigationEnd event
      this.router.events.filter(event => event instanceof NavigationEnd).subscribe(event => {

        //set breadcrumbs
        let root: ActivatedRoute = this.activatedRoute.root;
        this.breadcrumbs = this.getBreadcrumbs(root);

        if(this.breadcrumbs.length > 1)
          this.currentRoute = this.breadcrumbs.slice(-1)[0];
        else
          this.currentRoute = this.breadcrumbs[0];

          this.getTranslations();

      });



      this.translate.onLangChange.subscribe((event: LangChangeEvent) => {
        this.getTranslations();
      });
    }

    getTranslations(){
      if(this.breadcrumbs == null) return;

      this.breadcrumbs.forEach(breadcrumb => {
        this.translate.get('ROUTE_' + breadcrumb.code.toUpperCase()).subscribe((result: string) => {
          console.log(result);
          breadcrumb.label = result;
        });
      });
    }

    canShowBreadcrumb() {

      if(this.currentRoute == null || this.currentRoute.code == ROUTE_HOME)
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
          url: url,
          code: child.snapshot.data[ROUTE_DATA_BREADCRUMB]
        };
        breadcrumbs.push(breadcrumb);

        //recursive
        return this.getBreadcrumbs(child, url, breadcrumbs);
      }

      //we should never get here, but just in case
      return breadcrumbs;
    }
}
