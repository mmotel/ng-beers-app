import { Component, OnInit } from '@angular/core';

import { Beer } from './../../shared/beer';
import { BeerService } from './../../shared/beer.service';


@Component({
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css'],
  providers: [ BeerService ]
})
export class BeersListComponent implements OnInit {

  public beers: Beer[];

  constructor (
    private _beer: BeerService
  ) { }

  ngOnInit () {
    this._beer.getBeers().subscribe( (beers) => {
      this.beers = beers;
    });
  }

}
