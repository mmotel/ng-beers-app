import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { LocalStorageService } from './shared/service/local-storage/local-storage.service';


@NgModule({
  declarations: [
    AppComponent
],
  imports: [
    BrowserModule, BrowserAnimationsModule, SharedModule,

    AppRoutingModule,

    CoreModule,
  ],
  providers: [
    LocalStorageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
