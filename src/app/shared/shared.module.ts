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
import { NoteBoxComponent } from './note-box/note-box.component';
import { CutWordsPipe } from './pipe/cut-words/cut-words.pipe';



const MODULES = [
    CommonModule, HttpModule, RouterModule, FormsModule,
];

const MD_MODULES = [
  MdButtonModule, MdToolbarModule, MdListModule, MdCardModule, MdIconModule,
  MdProgressSpinnerModule, MdInputModule,
];

const COMPONENTS = [
  LoadingComponent, BeerCardComponent, BeersListComponent, BeersSearchComponent,
  PopupComponent, NoteBoxComponent,
];

const PIPES = [
  CutWordsPipe,
];


@NgModule({
  imports: [
    MODULES, MD_MODULES,
  ],
  declarations: [
    COMPONENTS, PIPES,
  ],
  exports: [
    MODULES, MD_MODULES, COMPONENTS, PIPES,
  ]
})
export class SharedModule { }
