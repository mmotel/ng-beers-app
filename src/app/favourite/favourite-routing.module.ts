import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FavouriteBeersComponent } from './favourite-beers/favourite-beers.component';

const routes: Routes = [
  {path: 'favourite', component: FavouriteBeersComponent}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FavouriteRoutingModule { }
