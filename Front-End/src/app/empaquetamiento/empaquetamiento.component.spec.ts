import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpaquetamientoComponent } from './empaquetamiento.component';

describe('EmpaquetamientoComponent', () => {
  let component: EmpaquetamientoComponent;
  let fixture: ComponentFixture<EmpaquetamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpaquetamientoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpaquetamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
