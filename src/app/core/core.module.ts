import { NgModule } from '@angular/core';

import { SharedModule } from './../shared/shared.module';
import { CoreRoutingModule } from './core-routing.module';

import { BeersListComponent } from './beers-list/beers-list.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';


@NgModule({
  imports: [
    SharedModule,

    CoreRoutingModule,
  ],
  declarations: [
    BeersListComponent,
    BeerDetailsComponent,
  ]
})
export class CoreModule { }
