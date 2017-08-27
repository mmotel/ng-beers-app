import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BeersSearchComponent } from './beers-search.component';

describe('BeersSearchComponent', () => {
  let component: BeersSearchComponent;
  let fixture: ComponentFixture<BeersSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BeersSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BeersSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
