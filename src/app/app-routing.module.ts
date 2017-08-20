import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { BeersListComponent } from './beers-list/beers-list.component';

const APP_ROUTES = [
  { path: '', component: BeersListComponent }
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
