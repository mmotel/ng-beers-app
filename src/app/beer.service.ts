import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Beer, IBeerRaw } from './beet';


const BASE_BEERS_URL = 'https://api.punkapi.com/v2/beers';

@Injectable()
export class BeerService {

  constructor (
    private _http: Http
  ) { }

  public getBeers (): Observable<any> {
    return this._http.get(BASE_BEERS_URL)
      .map( (response: Response) => {
        return response.json();
      })
      .map(this.mapBeers);
  }

  private mapBeers (response: any): Beer[] {
    const beers: IBeerRaw[] = <IBeerRaw[]> response;

    return beers.map(beer => new Beer(beer));
  }

}
