import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesService } from './services/movies.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MovieResolver } from "./services/movie.resolver";
import { moviesReducer } from './movie.reducers';
import { MovieEffects } from './movie.effects';

//Angular Material
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatProgressSpinnerModule} from '@angular/material';
import {MatButtonToggleModule} from '@angular/material/button-toggle';

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

//WORKFLOW: ((10)) Adding StoreModule.forFeature and EffectsModule.forFeature to the feature module
@NgModule({
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    RouterModule.forChild(moviesRoutes),
    StoreModule.forFeature('movies', moviesReducer),
    EffectsModule.forFeature([MovieEffects])
  ],
  declarations: [HomeComponent, MovieListComponent, MovieDetailsComponent],
  exports: [HomeComponent, MovieListComponent, MovieDetailsComponent],
  providers: [MoviesService,MovieResolver]
})
export class MoviesModule { }
