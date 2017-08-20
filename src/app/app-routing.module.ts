import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BeersListComponent } from './beers-list/beers-list.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';


const APP_ROUTES = [
  { path: '', component: BeersListComponent },
  { path: 'details/:id', component: BeerDetailsComponent },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
