import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


const APP_ROUTES = [

];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
