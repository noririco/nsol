import { Action } from '@ngrx/store';
import { Movie } from './model/movie.model';

//WORKFLOW: ((1)) Create MoviesActionTypes enum, Create class for each ActionType , declare the Actions as type
export enum MoviesActionTypes {

    MovieRequested = '[Movie Details Page] Movie Requested',
    MovieLoaded = '[Movie API] MovieLoaded',
    MovieClear = '[Movie API] MovieClear',
    AllMoviesRequested = '[Movies HomePage] AllMoviesRequested',
    AllMoviesLoaded = '[Movie API] AllMoviesLoaded',
    AllMoviesRequestedCancelled = '[Movie API] AllMoviesRequestedCancelled'
}

export class MovieRequested implements Action {
    readonly type = MoviesActionTypes.MovieRequested;

    constructor(public payload: {movieId:number}) {}
}
export class MovieLoaded implements Action {
    readonly type = MoviesActionTypes.MovieLoaded;

    constructor(public payload: {movie: Movie}) {}
}

export class MovieClear implements Action {
    readonly type = MoviesActionTypes.MovieClear;
}

export class AllMoviesRequested implements Action {
    readonly type = MoviesActionTypes.AllMoviesRequested;
}

export class AllMoviesLoaded implements Action {
    readonly type = MoviesActionTypes.AllMoviesLoaded;

    constructor(public payload: {movies: Movie[]}) {}
}

export class AllMoviesRequestedCancelled implements Action {
    readonly type = MoviesActionTypes.AllMoviesRequestedCancelled;
}

export type MovieActions = MovieRequested | MovieLoaded | MovieClear | AllMoviesRequested | AllMoviesLoaded | AllMoviesRequestedCancelled;



