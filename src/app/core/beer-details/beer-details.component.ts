import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Beer } from './../../shared/model/beer';
import { BeerService } from './../../shared/service/beer.service';


@Component({
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css'],
  providers: [ BeerService ]
})
export class BeerDetailsComponent implements OnInit {

  public beer: Beer;

  public backUrl: string = '/';

  constructor (
    private _activatedRoute: ActivatedRoute,
    private _beer: BeerService
  ) { }

  ngOnInit () {
    const beerId: number = +this._activatedRoute.snapshot.params['id'];
    const backUrl = this._activatedRoute.snapshot.params['back'];

    if (backUrl) {
      this.backUrl = backUrl;
    }

    this._beer.getBeer(beerId).subscribe(beer => {
      this.beer = beer;
    });
  }

}
