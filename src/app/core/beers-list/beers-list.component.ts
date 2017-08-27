import { Component, OnInit } from '@angular/core';

import { Beer } from './../../shared/model/beer';
import { BeerService } from './../../shared/service/beer.service';


@Component({
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css'],
  providers: [ BeerService ]
})
export class BeersListComponent implements OnInit {

  public beers: Beer[];

  private _beers: Beer[] = [];

  constructor (
    private _beer: BeerService
  ) { }

  ngOnInit () {
    this._beer.getBeers().subscribe( (beers) => {
      this._beers = beers;
      this.beers = beers;
    });
  }

  public search (phrase: string) {
    phrase = phrase.trim().toLowerCase();
    this.beers = this._beers
      .filter(beer =>
        beer.name.toLowerCase().indexOf(phrase) > -1 ||
        beer.description.toLowerCase().indexOf(phrase) > -1);
  }

}
