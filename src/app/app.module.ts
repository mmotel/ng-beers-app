import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule, BrowserAnimationsModule, SharedModule,

    AppRoutingModule,

    CoreModule,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
