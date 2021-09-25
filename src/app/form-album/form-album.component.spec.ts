import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAlbumComponent } from './form-album.component';

describe('FormAlbumComponent', () => {
  let component: FormAlbumComponent;
  let fixture: ComponentFixture<FormAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormAlbumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
