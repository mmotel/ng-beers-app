import { TestBed, inject } from '@angular/core/testing';

import { FavouriteBeerService } from './favourite-beer.service';

describe('FavouriteBeerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavouriteBeerService]
    });
  });

  it('should be created', inject([FavouriteBeerService], (service: FavouriteBeerService) => {
    expect(service).toBeTruthy();
  }));
});
