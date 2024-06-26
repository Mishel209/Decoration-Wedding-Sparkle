import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahvalniceIPrskaliceTextComponent } from './zahvalnice-i-prskalice-text.component';

describe('ZahvalniceIPrskaliceTextComponent', () => {
  let component: ZahvalniceIPrskaliceTextComponent;
  let fixture: ComponentFixture<ZahvalniceIPrskaliceTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZahvalniceIPrskaliceTextComponent]
    });
    fixture = TestBed.createComponent(ZahvalniceIPrskaliceTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
