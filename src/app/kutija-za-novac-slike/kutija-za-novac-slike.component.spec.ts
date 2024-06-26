import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KutijaZaNovacSlikeComponent } from './kutija-za-novac-slike.component';

describe('KutijaZaNovacSlikeComponent', () => {
  let component: KutijaZaNovacSlikeComponent;
  let fixture: ComponentFixture<KutijaZaNovacSlikeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KutijaZaNovacSlikeComponent]
    });
    fixture = TestBed.createComponent(KutijaZaNovacSlikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
