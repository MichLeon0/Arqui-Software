import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarExComponent } from './editar-ex.component';

describe('EditarExComponent', () => {
  let component: EditarExComponent;
  let fixture: ComponentFixture<EditarExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarExComponent]
    });
    fixture = TestBed.createComponent(EditarExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
