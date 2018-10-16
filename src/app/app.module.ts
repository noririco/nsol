import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from "@angular/router";

//Modules (not lazy loaded)
import { AuthModule } from "./auth/auth.module";
import { SharedModule } from './shared/shared.module';

//Guards
import {AuthGuard} from './auth/auth.guard';

//Store
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {RouterStateSerializer, StoreRouterConnectingModule} from "@ngrx/router-store";
import { EffectsModule } from '@ngrx/effects';
import { reducers, metaReducers } from './reducers';
import {CustomSerializer} from './shared/utils';

//Configs
import { environment } from '../environments/environment';

//Components
import { AppComponent } from './app.component';
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

/**
 * NOTE:
 * This module is the main module,
 * the module should stay thin and import other modules,
 * which will gain modularity at its best.
 */
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
