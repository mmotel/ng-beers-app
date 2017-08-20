import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Beer } from './../beer';
import { BeerService } from './../beer.service';


@Component({
  selector: 'app-beer-details',
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
