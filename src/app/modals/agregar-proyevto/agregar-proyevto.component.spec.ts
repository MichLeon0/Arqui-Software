import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarProyevtoComponent } from './agregar-proyevto.component';

describe('AgregarProyevtoComponent', () => {
  let component: AgregarProyevtoComponent;
  let fixture: ComponentFixture<AgregarProyevtoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarProyevtoComponent]
    });
    fixture = TestBed.createComponent(AgregarProyevtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
