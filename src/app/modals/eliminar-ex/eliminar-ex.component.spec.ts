import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarExComponent } from './eliminar-ex.component';

describe('EliminarExComponent', () => {
  let component: EliminarExComponent;
  let fixture: ComponentFixture<EliminarExComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarExComponent]
    });
    fixture = TestBed.createComponent(EliminarExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
