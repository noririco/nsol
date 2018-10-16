import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Angular Material
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {
  MatListModule,MatSidenavModule, MatToolbarModule,MatProgressSpinnerModule
} from "@angular/material";

//Components
import { NowtimeComponent } from './components/nowtime/nowtime.component';

//Layouts
import { FlexboxyComponent } from './layouts/flexboxy/flexboxy.component';

//Pipes
import { YoutubeSanitizerPipe } from './../shared/pipes/youtube-sanitizer.pipe';


/**
 * NOTE:
 * This module contains shared content,
 * add this module to any other module to use its content
 */
@NgModule({
  imports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule
  ],
  declarations: [NowtimeComponent, FlexboxyComponent, YoutubeSanitizerPipe],
  exports: [
    CommonModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    NowtimeComponent,
    FlexboxyComponent,
    YoutubeSanitizerPipe
  ]
})
export class SharedModule { }
