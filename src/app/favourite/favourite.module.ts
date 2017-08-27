import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FavouriteRoutingModule } from './favourite-routing.module';
import { FavouriteBeersComponent } from './favourite-beers/favourite-beers.component';

@NgModule({
  imports: [
    CommonModule,
    FavouriteRoutingModule
  ],
  declarations: [
    FavouriteBeersComponent
  ]
})
export class FavouriteModule { }
