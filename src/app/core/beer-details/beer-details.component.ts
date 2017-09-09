import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Beer } from './../../shared/model/beer';
import { BeerService } from './../../shared/service/beer.service';
import { NoteService } from './../../shared/service/note/note.service';


@Component({
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css'],
  providers: [ BeerService, NoteService ]
})
export class BeerDetailsComponent implements OnInit {

  public beer: Beer;
  public beerNote: string = '';

  public backUrl: string = '/';

  constructor (
    private _activatedRoute: ActivatedRoute,
    private _beer: BeerService,
    private _note: NoteService
  ) { }

  ngOnInit () {
    const beerId: number = +this._activatedRoute.snapshot.params['id'];
    const backUrl = this._activatedRoute.snapshot.params['back'];

    if (backUrl) {
      this.backUrl = backUrl;
    }

    this.beerNote = this._note.getNote(beerId);

    this._beer.getBeer(beerId).subscribe(beer => {
      this.beer = beer;
    });
  }

  public onSaveNote (note: string) {
    this.beerNote = note;
    this._note.setNote(this.beer.id, this.beerNote);
  }

}
