import {BrowserModule} from '@angular/platform-browser';

import {NgModule} from '@angular/core';
import { SharedModule } from './shared/shared.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import {HttpClientModule} from "@angular/common/http";

import {RouterModule, Routes} from "@angular/router";
import {AuthModule} from "./auth/auth.module";
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import {RouterStateSerializer, StoreRouterConnectingModule} from "@ngrx/router-store";

import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers';
import {AuthGuard} from './auth/auth.guard';
import {CustomSerializer} from './shared/utils';

import { FlexlComponent } from './shared/layouts/flexl/flexl.component';

const routes: Routes = [
    // {
    //     path: 'courses',
    //     data: {animation: 'CoursesPage'},
    //     loadChildren: './courses/courses.module#CoursesModule',
    //     canActivate: [AuthGuard],
    // },
    {
        path: 'movies',
        data: {animation: 'MoviesPage'},
        loadChildren: './movies/movies.module#MoviesModule',
        canActivate: [AuthGuard],
    },
    {
        path: "**",
        redirectTo: '/'
    }
];


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes),
        SharedModule,
        HttpClientModule,
        AuthModule.forRoot(),
        StoreModule.forRoot(reducers, { metaReducers }),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot([]),
        StoreRouterConnectingModule.forRoot({stateKey:'router'})
    ],
    providers: [
      { provide: RouterStateSerializer, useClass: CustomSerializer }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
