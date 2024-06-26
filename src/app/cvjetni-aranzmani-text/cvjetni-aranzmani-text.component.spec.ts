import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvjetniAranzmaniTextComponent } from './cvjetni-aranzmani-text.component';

describe('CvjetniAranzmaniTextComponent', () => {
  let component: CvjetniAranzmaniTextComponent;
  let fixture: ComponentFixture<CvjetniAranzmaniTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvjetniAranzmaniTextComponent]
    });
    fixture = TestBed.createComponent(CvjetniAranzmaniTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
