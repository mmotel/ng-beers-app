import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
    MdButtonModule, MdToolbarModule, MdListModule, MdCardModule, MdIconModule,
    MdProgressSpinnerModule, MdInputModule
} from '@angular/material';

import { LoadingComponent } from './loading/loading.component';
import { BeerCardComponent } from './beer-card/beer-card.component';
import { BeersListComponent } from './beers-list/beers-list.component';
import { BeersSearchComponent } from './beers-search/beers-search.component';
import { PopupComponent } from './popup/popup.component';


const MODULES = [
    CommonModule, HttpModule, RouterModule, FormsModule,
];

const MD_MODULES = [
  MdButtonModule, MdToolbarModule, MdListModule, MdCardModule, MdIconModule,
  MdProgressSpinnerModule, MdInputModule,
];

const COMPONENTS = [
  LoadingComponent, BeerCardComponent, BeersListComponent, BeersSearchComponent,
  PopupComponent,
];


@NgModule({
  imports: [
    MODULES, MD_MODULES,
  ],
  declarations: [
    COMPONENTS,
  ],
  exports: [
    MODULES, MD_MODULES, COMPONENTS,
  ]
})
export class SharedModule { }
