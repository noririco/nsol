import { routeAnimation } from './shared/_animations/routeAnimation';

import { User } from './model/user.model';
import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {Observable} from "rxjs";
import {AppState} from './reducers';
import {Logout} from './auth/auth.actions';
import {map, tap, switchMap, mergeMap} from 'rxjs/operators';
import { isLoggedIn, isLoggedOut, currentUser, selectAuthState } from './auth/auth.selectors';
import {Router, RouterOutlet} from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    routeAnimation
  ]
})
export class AppComponent implements OnInit {

    isLoggedIn$: Observable<boolean>;

    isLoggedOut$: Observable<boolean>;

    currentUser$: Observable<User>;

    slideUpDownState: boolean;

    constructor(private store: Store<AppState>, private router: Router) {
      this.slideUpDownState = false;
    }

    ngOnInit() {

      /**
       * NOTE: Check if logged in, if does, get the currentUser email (identifier)
       */
      this.isLoggedIn$ = this.store
        .pipe(
          select(isLoggedIn),
          tap(loggedIn => {
            if(loggedIn) {
              this.router.navigateByUrl('/movies');
            }
          })
        );

      this.currentUser$ = this.store
      .pipe(
        select(currentUser),
        map((user) => {
          if(user) return user.email
        })
      );

      this.isLoggedOut$ = this.store
        .pipe(
          select(isLoggedOut)
        );

    }

    logout() {

      this.store.dispatch(new Logout());

    }

    getDepth(outlet : RouterOutlet) {
      // console.log(outlet.activatedRouteData['animation']);
      
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
    }

    toggleSlideUpDown() {
      this.slideUpDownState = !this.slideUpDownState;
    }
}
