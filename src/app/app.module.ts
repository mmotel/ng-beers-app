import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdToolbarModule, MdListModule } from '@angular/material';
import 'hammerjs';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersListComponent } from './beers-list/beers-list.component';


@NgModule({
  declarations: [
    AppComponent,
    BeersListComponent,
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpModule,
    MdButtonModule, MdToolbarModule, MdListModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
