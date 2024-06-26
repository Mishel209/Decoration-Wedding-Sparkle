import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecijalniEfektiSlikeComponent } from './specijalni-efekti-slike.component';

describe('SpecijalniEfektiSlikeComponent', () => {
  let component: SpecijalniEfektiSlikeComponent;
  let fixture: ComponentFixture<SpecijalniEfektiSlikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecijalniEfektiSlikeComponent]
    });
    fixture = TestBed.createComponent(SpecijalniEfektiSlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
