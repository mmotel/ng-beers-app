import { AppComponent } from './app.component';
import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


const APP_ROUTES = [
  { path: '', redirectTo: '/list', pathMatch: 'full' },
  { path: 'favourite', loadChildren: 'app/favourite/favourite.module#FavouriteModule' },
  { path: 'random', loadChildren: 'app/random-beer/random-beer.module#RandomBeerModule' },
];

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(APP_ROUTES)
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
