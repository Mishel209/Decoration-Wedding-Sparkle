import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDobrodosliceTextComponent } from './tabla-dobrodoslice-text.component';

describe('TablaDobrodosliceTextComponent', () => {
  let component: TablaDobrodosliceTextComponent;
  let fixture: ComponentFixture<TablaDobrodosliceTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaDobrodosliceTextComponent]
    });
    fixture = TestBed.createComponent(TablaDobrodosliceTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
