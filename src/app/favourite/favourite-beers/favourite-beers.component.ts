import { Component, OnInit } from '@angular/core';

import { Beer } from './../../shared/model/beer';
import { BeerService } from './../../shared/service/beer.service';


@Component({
  selector: 'app-favourite-beers',
  templateUrl: './favourite-beers.component.html',
  styleUrls: ['./favourite-beers.component.css'],
  providers: [BeerService]
})
export class FavouriteBeersComponent implements OnInit {

  public beers: Beer[];

  constructor (
    private _beer: BeerService
  ) { }

  ngOnInit () {
    // TODO get favourites list
    this._beer.getBeers().subscribe((beers) => {
      this.beers = beers;
      // TODO filter to show only favourite beers
    });
  }

}
