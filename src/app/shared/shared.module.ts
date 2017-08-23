import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {
    MdButtonModule, MdToolbarModule, MdListModule, MdCardModule, MdIconModule,
    MdProgressSpinnerModule
} from '@angular/material';

import { LoadingComponent } from './loading/loading.component';


@NgModule({
  imports: [
    CommonModule, HttpModule, RouterModule,

    MdButtonModule, MdToolbarModule, MdListModule, MdCardModule, MdIconModule,
    MdProgressSpinnerModule,
  ],
  declarations: [
    LoadingComponent
  ],
  exports: [
    CommonModule, HttpModule, RouterModule,

    MdButtonModule, MdToolbarModule, MdListModule, MdCardModule, MdIconModule,
    MdProgressSpinnerModule,

    LoadingComponent
  ]
})
export class SharedModule { }
