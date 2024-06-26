import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MladenackiStoSlikeComponent } from './mladenacki-sto-slike.component';

describe('MladenackiStoSlikeComponent', () => {
  let component: MladenackiStoSlikeComponent;
  let fixture: ComponentFixture<MladenackiStoSlikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MladenackiStoSlikeComponent]
    });
    fixture = TestBed.createComponent(MladenackiStoSlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
