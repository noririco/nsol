import { MovieClear } from './../movie.actions';
import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Movie} from "../model/movie.model";
import {Observable, of} from "rxjs";
import {MoviesService} from "./movies.service";
import {AppState} from "../../reducers";
import {select, Store} from "@ngrx/store";
import {filter, first, tap, take, map} from "rxjs/operators";
import {selectMovieById, selectCurrentMovie} from '../movie.selectors';
import {MovieRequested} from '../movie.actions';


/**
 * Interface that class can implement to be a data provider.
 * resolver is that intermediate code, which can be executed when a link has been clicked and before a component is loaded.
 * 
 * General Routing Flow.
 *  1.User clicks the link.
 *  2.Angular loads the respective component.
 * Routing Flow with Resolver
 *  1.User clicks the link.
 *  2.Angular executes certain code and returns a value or observable.
 *  3.You can collect the returned value or observable in constructor or in ngOnInit, in class of your component which is about to load.
 *  4.Use the collected the data for your purpose.
 *  5.Now you can load your component.
 * 
 * from Routes...
 * {
 *  path: ':id',
 *  component: CourseComponent,
 *  resolve: {
 *      movie: CourseResolver
 *  }
 * }
 * 
 */

@Injectable()
export class MovieResolver implements Resolve<Movie> {

    constructor(
        private moviesService:MoviesService,
        private store: Store<AppState>) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Movie> {

        const movieId = route.params['id'];
        //WORKFLOW: ((6))
        this.store.dispatch(new MovieClear());

        return this.store
          .pipe(
            select(selectCurrentMovie),
            tap(movie => {
              if (movie && (movie.id == movieId)) {
                // console.log("movie is the same");
              }
              else {
                // console.log("movie is undefined or not the same id");
                this.store.dispatch(new MovieRequested({movieId}));
              }
            }),
            filter(movie => !!movie),
            take(1)
          )
        // return this.store
        //   .pipe(
        //     select(selectMovieById(movieId)),
        //     tap(movie => {
        //       if (!movie) {
        //         this.store.dispatch(new MovieRequested({movieId}));
        //       }
        //     }),
        //     filter(movie => !!movie),
        //     first()
        //   )

          

    }

}