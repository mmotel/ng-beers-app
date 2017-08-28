import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Beer } from './../model/beer';


@Component({
  selector: 'app-beers-list',
  templateUrl: './beers-list.component.html',
  styleUrls: ['./beers-list.component.css']
})
export class BeersListComponent implements OnInit {

  @Input() beers: Beer[] = [];
  @Input() favouriteBeers: Beer[] = [];
  @Input() showFavouriteActions: boolean = false;
  @Input() isAddToFavouriteActive: boolean = false;
  @Input() isRemoveFromFavouriteActive: boolean = false;

  @Output() addFavouriteBeer: EventEmitter<Beer> = new EventEmitter<Beer>();
  @Output() removeFromFavouriteBeer: EventEmitter<Beer> = new EventEmitter<Beer>();

  constructor () { }

  ngOnInit () {
  }

  public isFavourite (beer: Beer): boolean {
    return this.favouriteBeers.some(b => b.id === beer.id);
  }

  public addToFavourite (beer: Beer) {
    this.addFavouriteBeer.emit(beer);
  }

  public removeFromFaovurite (beer: Beer) {
    this.removeFromFavouriteBeer.emit(beer);
  }

  public preventNavigation (event: any) {
    event.stopPropagation();
  }

}
