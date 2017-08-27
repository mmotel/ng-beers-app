import { Component, OnInit } from '@angular/core';

import { Beer } from './../../shared/model/beer';
import { BeerService } from './../../shared/service/beer.service';
import { FavouriteBeerService } from './../service/favourite-beer/favourite-beer.service';


@Component({
  selector: 'app-favourite-beers',
  templateUrl: './favourite-beers.component.html',
  styleUrls: ['./favourite-beers.component.css'],
  providers: [BeerService, FavouriteBeerService]
})
export class FavouriteBeersComponent implements OnInit {

  public beers: Beer[];

  constructor (
    private _beer: BeerService,
    private _favouriteBeer: FavouriteBeerService
  ) { }

  ngOnInit () {
    const favouriteBeersIds = this._favouriteBeer.getFavouriteBeers();

    this._beer.getBeers().subscribe((beers) => {
      this.beers = beers
        .filter(beer => favouriteBeersIds.find(beerId => beerId === beer.id) );
    });
  }

}
