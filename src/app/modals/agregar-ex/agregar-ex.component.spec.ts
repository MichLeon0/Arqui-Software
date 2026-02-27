import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarExComponent } from './agregar-ex.component';

describe('AgregarExComponent', () => {
  let component: AgregarExComponent;
  let fixture: ComponentFixture<AgregarExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarExComponent]
    });
    fixture = TestBed.createComponent(AgregarExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
