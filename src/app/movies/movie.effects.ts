import { allMoviesLoaded } from './movie.selectors';
import { AppState } from './../reducers/index';

import { Injectable } from '@angular/core';
import { Store, Action, select } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { MoviesService } from './services/movies.service';
import { mergeMap, map, withLatestFrom, filter, catchError, tap } from 'rxjs/operators';
import { MoviesActionTypes, MovieRequested, MovieLoaded, AllMoviesRequested, AllMoviesLoaded, AllMoviesRequestedCancelled} from './movie.actions';
import { Observable, of } from 'rxjs';


//WORKFLOW: ((7))
@Injectable()
export class MovieEffects {
    @Effect() loadMovie$: Observable<Action> = this.actions$.ofType(MoviesActionTypes.MovieRequested)
        .pipe(
            ofType<MovieRequested>(MoviesActionTypes.MovieRequested),
            mergeMap(action => this.moviesService.findMovieById(action.payload.movieId)),
            map(movie => new MovieLoaded({movie}))
        );

    @Effect() loadAllMovies$: Observable<Action> = this.actions$.ofType(MoviesActionTypes.AllMoviesRequested)
        .pipe(
            ofType<AllMoviesRequested>(MoviesActionTypes.AllMoviesRequested),
            withLatestFrom(this.store.pipe(select(allMoviesLoaded))),
            filter(([action, allMoviesLoaded]) => !allMoviesLoaded),
            mergeMap(() => this.moviesService.findAllMovies()
                .pipe(
                    catchError(err => {
                        console.log('error loading a movies page ', err);
                        this.store.dispatch(new AllMoviesRequestedCancelled());
                        return of([]);
                    })
                )),
            map(movies => new AllMoviesLoaded({movies}))
        );

    constructor(
        private actions$: Actions,
        private moviesService: MoviesService,
        private store: Store<AppState>,
    ) {}
}