import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvjetniAranzmaniSlikeComponent } from './cvjetni-aranzmani-slike.component';

describe('CvjetniAranzmaniSlikeComponent', () => {
  let component: CvjetniAranzmaniSlikeComponent;
  let fixture: ComponentFixture<CvjetniAranzmaniSlikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvjetniAranzmaniSlikeComponent]
    });
    fixture = TestBed.createComponent(CvjetniAranzmaniSlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
