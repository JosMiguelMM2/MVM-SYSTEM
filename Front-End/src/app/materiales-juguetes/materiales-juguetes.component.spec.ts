import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialesJuguetesComponent } from './materiales-juguetes.component';

describe('MaterialesJuguetesComponent', () => {
  let component: MaterialesJuguetesComponent;
  let fixture: ComponentFixture<MaterialesJuguetesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaterialesJuguetesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialesJuguetesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
