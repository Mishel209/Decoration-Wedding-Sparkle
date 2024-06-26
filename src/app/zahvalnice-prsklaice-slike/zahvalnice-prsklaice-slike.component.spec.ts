import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZahvalnicePrsklaiceSlikeComponent } from './zahvalnice-prsklaice-slike.component';

describe('ZahvalnicePrsklaiceSlikeComponent', () => {
  let component: ZahvalnicePrsklaiceSlikeComponent;
  let fixture: ComponentFixture<ZahvalnicePrsklaiceSlikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZahvalnicePrsklaiceSlikeComponent]
    });
    fixture = TestBed.createComponent(ZahvalnicePrsklaiceSlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
