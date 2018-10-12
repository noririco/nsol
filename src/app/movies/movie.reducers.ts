import { MovieActions, MoviesActionTypes, AllMoviesLoaded, AllMoviesRequested } from './movie.actions';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { Movie } from './model/movie.model';


//WORKFLOW: ((2))
export interface MoviesState extends EntityState<Movie>{
    loading:boolean;
    allMoviesLoaded:boolean;
    currentMovie:Movie;
}

function sortByMovieYear(m1:Movie, m2:Movie) {
    return (+m2.year) - (+m1.year);
}

//WORKFLOW: ((3))
//NOTE: To get high performance in CRUD operations it is good to assign false value to sortComparer property.
export const adapter : EntityAdapter<Movie> = createEntityAdapter<Movie>({
  sortComparer: sortByMovieYear
});

//WORKFLOW: ((8)) Creating Initial state using the adapter
export const initialMoviesState = adapter.getInitialState({ 
  loading: false,
  allMoviesLoaded: false,
  currentMovie: undefined
});

//WORKFLOW: ((9)) Creating a reducer
export function moviesReducer(state = initialMoviesState , action: MovieActions): MoviesState {

  switch(action.type) {

    case MoviesActionTypes.MovieLoaded:

      return {
        ...state,
        currentMovie: action.payload.movie
      }
      // return adapter.addOne(action.payload.movie, {...state, currentMovie: action.payload.movie});
    case MoviesActionTypes.MovieClear:

      return {
        ...state,
        currentMovie: undefined
      }

    case MoviesActionTypes.AllMoviesRequested:

      return {
        ...state,
        loading: true
      }

    case MoviesActionTypes.AllMoviesRequestedCancelled:

      return {
        ...state,
        loading: false
      }
      
    case MoviesActionTypes.AllMoviesLoaded:

      return adapter.addAll(action.payload.movies, {...state,allMoviesLoaded:true, loading: false});

    default: {

      return state;
    }

  }
}

export const {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal
} = adapter.getSelectors();





