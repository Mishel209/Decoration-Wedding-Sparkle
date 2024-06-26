import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MladenackiStoTextComponent } from './mladenacki-sto-text.component';

describe('MladenackiStoTextComponent', () => {
  let component: MladenackiStoTextComponent;
  let fixture: ComponentFixture<MladenackiStoTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MladenackiStoTextComponent]
    });
    fixture = TestBed.createComponent(MladenackiStoTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
