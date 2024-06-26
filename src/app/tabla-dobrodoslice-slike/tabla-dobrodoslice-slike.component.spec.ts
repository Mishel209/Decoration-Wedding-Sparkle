import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDobrodosliceSlikeComponent } from './tabla-dobrodoslice-slike.component';

describe('TablaDobrodosliceSlikeComponent', () => {
  let component: TablaDobrodosliceSlikeComponent;
  let fixture: ComponentFixture<TablaDobrodosliceSlikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TablaDobrodosliceSlikeComponent]
    });
    fixture = TestBed.createComponent(TablaDobrodosliceSlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
