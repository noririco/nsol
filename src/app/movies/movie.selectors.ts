import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MoviesState } from './movie.reducers';
import * as fromMovie from './movie.reducers';
//NOTE: To query the store we create selectors.

//WORKFLOW: ((4))
export const selectMoviesState = createFeatureSelector<MoviesState>("movies");

//WORKFLOW: ((5))
export const selectCurrentMovie =  createSelector (
    selectMoviesState,
    moviesState => moviesState.currentMovie
);
export const selectMovieById = (movieId:number) => createSelector (
    selectMoviesState,
    moviesState => moviesState.entities[movieId]
);

export const selectAllMovies = createSelector (
    selectMoviesState,
    fromMovie.selectAll
);

export const allMoviesLoaded = createSelector (
    selectMoviesState,
    moviesState => moviesState.allMoviesLoaded
);

export const selectMoviesLoading = createSelector(
selectMoviesState,
moviesState => moviesState.loading
);


