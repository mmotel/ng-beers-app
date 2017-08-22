import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdToolbarModule, MdListModule, MdCardModule, MdIconModule,
  MdProgressSpinnerModule
} from '@angular/material';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeersListComponent } from './beers-list/beers-list.component';
import { BeerDetailsComponent } from './beer-details/beer-details.component';
import { LoadingComponent } from './loading/loading.component';


@NgModule({
  declarations: [
    AppComponent,
    BeersListComponent,
    BeerDetailsComponent,
    LoadingComponent
],
  imports: [
    BrowserModule, BrowserAnimationsModule, HttpModule,

    AppRoutingModule,

    MdButtonModule, MdToolbarModule, MdListModule, MdCardModule, MdIconModule,
    MdProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
