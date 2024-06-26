import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PozadineZaSlikanjeComponent } from './pozadine-za-slikanje.component';

describe('PozadineZaSlikanjeComponent', () => {
  let component: PozadineZaSlikanjeComponent;
  let fixture: ComponentFixture<PozadineZaSlikanjeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PozadineZaSlikanjeComponent]
    });
    fixture = TestBed.createComponent(PozadineZaSlikanjeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
