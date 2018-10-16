import { routeAnimation } from './shared/_animations/routeAnimation';
import { User } from './model/user.model';
import {Component, OnInit} from '@angular/core';
import {Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from './reducers';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    routeAnimation
  ]
})
export class AppComponent implements OnInit {
    window : Element;

    slideUpDownState: boolean;

    isRouteAnimationDone: boolean;

    constructor(private store: Store<AppState>, private router: Router) {
      this.slideUpDownState = false;
      this.isRouteAnimationDone = false;
    }

    ngOnInit() {

      this.router.events.subscribe(event => {
        // Scroll to top if accessing a page, not via browser history stack
        if (event instanceof NavigationEnd) {
            const contentContainer = document.querySelector('.mat-sidenav-content') || this.window;
            // contentContainer.scrollTo(0, 0);
        }
      });

    }

    getDepth(outlet : RouterOutlet) {
      // console.log(outlet.activatedRouteData['animation']);
      
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

    toggleSlideUpDown() {
      this.slideUpDownState = !this.slideUpDownState;
    }

    routeAnimationDone($event) {
      this.isRouteAnimationDone = true;
    }

    routeAnimationStart($event) {
      this.isRouteAnimationDone = false;
    }
}
