import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvjeticiKicankeSlikeComponent } from './cvjetici-kicanke-slike.component';

describe('CvjeticiKicankeSlikeComponent', () => {
  let component: CvjeticiKicankeSlikeComponent;
  let fixture: ComponentFixture<CvjeticiKicankeSlikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvjeticiKicankeSlikeComponent]
    });
    fixture = TestBed.createComponent(CvjeticiKicankeSlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
