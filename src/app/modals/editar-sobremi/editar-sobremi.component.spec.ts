import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarSobremiComponent } from './editar-sobremi.component';

describe('EditarSobremiComponent', () => {
  let component: EditarSobremiComponent;
  let fixture: ComponentFixture<EditarSobremiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarSobremiComponent]
    });
    fixture = TestBed.createComponent(EditarSobremiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
