import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistsearchComponent } from './artistsearch.component';

describe('ArtistsearchComponent', () => {
  let component: ArtistsearchComponent;
  let fixture: ComponentFixture<ArtistsearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArtistsearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
