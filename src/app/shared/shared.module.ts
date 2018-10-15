import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';


import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {
  MatListModule,MatSidenavModule, MatToolbarModule,MatProgressSpinnerModule
} from "@angular/material";

import { NowtimeComponent } from './components/nowtime/nowtime.component';
import { FlexlComponent } from './layouts/flexl/flexl.component';
import { FlexboxyComponent } from './layouts/flexboxy/flexboxy.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule
  ],
  declarations: [FlexlComponent, NowtimeComponent, FlexboxyComponent],
  exports: [
    CommonModule,
    FlexLayoutModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    FlexlComponent,
    NowtimeComponent,
    FlexboxyComponent
  ]
})
export class SharedModule { }
