import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {Observable} from "rxjs";
import { AllMoviesRequested } from './../movie.actions';
import { selectAllMovies, selectMoviesLoading, allMoviesLoaded } from './../movie.selectors';

import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { AppState } from './../../reducers/index';
import { Movie } from './../model/movie.model';
import { listStaggerAnimation } from './../../shared/_animations/listStaggerAnimation';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [ listStaggerAnimation ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeComponent implements OnInit {
  
  isAllMoviesLoaded$: Observable<boolean>;
  movies$: Observable<Movie[]>;
  sortCategories: string[]; 

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.sortCategories = ['Name', 'Date'];

    this.isAllMoviesLoaded$ = this.store.pipe(select(allMoviesLoaded));

    this.movies$ = this.store.pipe(select(selectAllMovies));
    
    this.store.dispatch(new AllMoviesRequested());


  }
  
  //Fix for mat-button-group
  toggleChange(event) {
    let toggle = event.source;
    if (toggle) {
      console.log(toggle);
      if(toggle.checked) {
        console.log(toggle.checked);
      }
      else {
        console.log(toggle.checked);
      }
    }
  }

}
