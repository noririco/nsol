


import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from "@angular/router";
import {Course} from "../model/course";
import {Observable} from "rxjs";
import {CoursesService} from "./courses.service";
import {AppState} from "../../reducers";
import {select, Store} from "@ngrx/store";
import {filter, first, tap} from "rxjs/operators";
import {selectCourseById} from '../course.selectors';
import {CourseRequested} from '../course.actions';


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
 *      course: CourseResolver
 *  }
 * }
 * 
 */

@Injectable()
export class CourseResolver implements Resolve<Course> {

    constructor(
        private coursesService:CoursesService,
        private store: Store<AppState>) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Course> {

        const courseId = route.params['id'];

        return this.store
          .pipe(
            select(selectCourseById(courseId)),
            tap(course => {
              if (!course) {
                this.store.dispatch(new CourseRequested({courseId}));
              }
            }),
            filter(course => !!course),
            first()
          )

    }

}

