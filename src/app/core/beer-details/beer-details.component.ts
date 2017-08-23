import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Beer } from './../../shared/beer';
import { BeerService } from './../../shared/beer.service';


@Component({
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css'],
  providers: [ BeerService ]
})
export class BeerDetailsComponent implements OnInit {

  public beer: Beer;

  constructor (
    private _activatedRoute: ActivatedRoute,
    private _beer: BeerService
  ) { }

  ngOnInit () {
    const beerId: number = +this._activatedRoute.snapshot.params['id'];

    this._beer.getBeer(beerId).subscribe(beer => {
      this.beer = beer;
    });
  }

}
