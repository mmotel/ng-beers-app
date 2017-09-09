import { TestBed, async, inject } from '@angular/core/testing';

import { IsAdultGuard } from './is-adult.guard';

describe('IsAdultGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IsAdultGuard]
    });
  });

  it('should ...', inject([IsAdultGuard], (guard: IsAdultGuard) => {
    expect(guard).toBeTruthy();
  }));
});
