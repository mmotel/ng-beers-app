import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import {
    MdButtonModule, MdToolbarModule, MdListModule, MdCardModule, MdIconModule,
    MdProgressSpinnerModule
} from '@angular/material';

import { LoadingComponent } from './loading/loading.component';

const MODULES = [
    CommonModule, HttpModule, RouterModule,
];

const MD_MODULES = [
  MdButtonModule, MdToolbarModule, MdListModule, MdCardModule, MdIconModule,
  MdProgressSpinnerModule,
];

const COMPONENTS = [
  LoadingComponent,
];


@NgModule({
  imports: [
    MODULES, MD_MODULES,
  ],
  declarations: [
    COMPONENTS
  ],
  exports: [
    MODULES, MD_MODULES, COMPONENTS,
  ]
})
export class SharedModule { }
