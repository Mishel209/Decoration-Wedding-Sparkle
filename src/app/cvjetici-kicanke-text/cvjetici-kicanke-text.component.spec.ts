import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvjeticiKicankeTextComponent } from './cvjetici-kicanke-text.component';

describe('CvjeticiKicankeTextComponent', () => {
  let component: CvjeticiKicankeTextComponent;
  let fixture: ComponentFixture<CvjeticiKicankeTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvjeticiKicankeTextComponent]
    });
    fixture = TestBed.createComponent(CvjeticiKicankeTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
