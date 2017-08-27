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

  private _searchPhrase: string = '';

  constructor (
    private _beer: BeerService
  ) { }

  ngOnInit () {
    this._beer.getBeers().subscribe( (beers) => {
      this._beers = beers;
      this.beers = beers;
    });
  }

  public get searchPhrase (): string {
    return this._searchPhrase;
  }

  public set searchPhrase (value: string) {
    this._searchPhrase = value;
    this.search();
  }

  public search () {
    const phrase = this.searchPhrase.trim().toLowerCase();

    this.beers = this._beers
      .filter(beer =>
        beer.name.toLowerCase().indexOf(phrase) > -1 ||
        beer.description.toLowerCase().indexOf(phrase) > -1);
  }

}
