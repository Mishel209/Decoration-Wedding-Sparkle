import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PozadinaZaSlikanjeSlikeComponent } from './pozadina-za-slikanje-slike.component';

describe('PozadinaZaSlikanjeSlikeComponent', () => {
  let component: PozadinaZaSlikanjeSlikeComponent;
  let fixture: ComponentFixture<PozadinaZaSlikanjeSlikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PozadinaZaSlikanjeSlikeComponent]
    });
    fixture = TestBed.createComponent(PozadinaZaSlikanjeSlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
