import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdToolbarModule, MdListModule, MdCardModule } from '@angular/material';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersListComponent } from './beers-list/beers-list.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';


@NgModule({
  declarations: [
    AppComponent,
    BeersListComponent,
    BeerDetailsComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpModule,
    MdButtonModule, MdToolbarModule, MdListModule, MdCardModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
