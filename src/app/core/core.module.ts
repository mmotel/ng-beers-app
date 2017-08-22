import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdButtonModule, MdToolbarModule, MdListModule, MdCardModule, MdIconModule,
    MdProgressSpinnerModule
} from '@angular/material';

import { CoreRoutingModule } from './core-routing.module';

import { BeersListComponent } from './beers-list/beers-list.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  imports: [
    CommonModule,
    CoreRoutingModule,

    MdButtonModule, MdToolbarModule, MdListModule, MdCardModule, MdIconModule,
    MdProgressSpinnerModule,
  ],
  declarations: [
    LoadingComponent,
    BeersListComponent,
    BeerDetailsComponent,
  ]
})
export class CoreModule { }
