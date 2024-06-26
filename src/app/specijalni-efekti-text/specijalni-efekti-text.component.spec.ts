import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecijalniEfektiTextComponent } from './specijalni-efekti-text.component';

describe('SpecijalniEfektiTextComponent', () => {
  let component: SpecijalniEfektiTextComponent;
  let fixture: ComponentFixture<SpecijalniEfektiTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecijalniEfektiTextComponent]
    });
    fixture = TestBed.createComponent(SpecijalniEfektiTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
