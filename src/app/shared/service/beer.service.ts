import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Beer, IBeerRaw } from '../model/beer';

const BASE_BEERS_URL = 'https://api.punkapi.com/v2/beers';
const RANDOM_BEER_SUFFIX = '/random';
const RANDOM_BEER_URL = `${BASE_BEERS_URL}${RANDOM_BEER_SUFFIX}`;


@Injectable()
export class BeerService {

  constructor (
    private _http: Http
  ) { }

  public getBeers (): Observable<Beer[]> {
    return this._http.get(BASE_BEERS_URL)
      .map( (response: Response) => {
        return response.json();
      })
      .map(this.mapBeers);
  }

  public getBeer (beerId: number): Observable<Beer> {
    return this._http.get(`${BASE_BEERS_URL}/${beerId}`)
      .map( (response) => {
        return response.json();
      })
      .map(this.mapBeer);
  }

  public getRandomBeer (): Observable<Beer> {
    return this._http.get(RANDOM_BEER_URL)
      .map( (response) => {
        return response.json();
      })
      .map(this.mapBeer);
  }

  private mapBeers (response: any): Beer[] {
    const beers: IBeerRaw[] = <IBeerRaw[]> response;

    return beers.map(beer => new Beer(beer));
  }

  private mapBeer (response: any): Beer {
    const beer: IBeerRaw[] = <IBeerRaw[]> response;

    return new Beer(beer[0]);
  }

}
