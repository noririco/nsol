import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';

//Custome Modules
import { SharedModule } from '../shared/shared.module';
//Services
import { MoviesService } from './services/movies.service';
//Store
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MovieResolver } from "./services/movie.resolver";
import { moviesReducer } from './movie.reducers';
import { MovieEffects } from './movie.effects';
//Components
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

//Routing, possible to move this into own module movies.routing.ts
export const moviesRoutes: Routes = [
  {
      path: "",
      data: {animation: 'MoviesPage'},
      component: HomeComponent

  },
  {
      path: ':id',
      data: {animation: 'MovieDetailsPage'},
      component: MovieDetailsComponent,
      resolve: {
          movie: MovieResolver
      }
  }
];

/**
 * NOTE:
 * This module is a Feature module,
 * the module contains all the logic for the Feature
 * and encapsulate it. this is also lazy-loaded via the app module.
 */
//WORKFLOW: ((10)) Adding StoreModule.forFeature and EffectsModule.forFeature to the feature module
@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(moviesRoutes),
    StoreModule.forFeature('movies', moviesReducer),
    EffectsModule.forFeature([MovieEffects])
  ],
  declarations: [HomeComponent, MovieListComponent, MovieDetailsComponent],
  exports: [HomeComponent, MovieListComponent, MovieDetailsComponent],
  providers: [MoviesService,MovieResolver]
})
export class MoviesModule { }
