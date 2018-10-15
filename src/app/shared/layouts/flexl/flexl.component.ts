import { Logout } from './../../../auth/auth.actions';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';
import { isLoggedIn, currentUser, isLoggedOut } from './../../../auth/auth.selectors';
import { select } from '@ngrx/store';
import { AppState } from './../../../reducers/index';
import { Store } from '@ngrx/store';
import { User } from './../../../model/user.model';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'flexl',
  templateUrl: './flexl.component.html',
  styleUrls: ['./flexl.component.scss']
})
export class FlexlComponent implements OnInit {
  isLoggedIn$: Observable<boolean>;

  isLoggedOut$: Observable<boolean>;

  currentUser$: Observable<User>;
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
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

}
