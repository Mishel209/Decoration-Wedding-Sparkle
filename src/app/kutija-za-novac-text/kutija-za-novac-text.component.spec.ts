import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KutijaZaNovacTextComponent } from './kutija-za-novac-text.component';

describe('KutijaZaNovacTextComponent', () => {
  let component: KutijaZaNovacTextComponent;
  let fixture: ComponentFixture<KutijaZaNovacTextComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KutijaZaNovacTextComponent]
    });
    fixture = TestBed.createComponent(KutijaZaNovacTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
