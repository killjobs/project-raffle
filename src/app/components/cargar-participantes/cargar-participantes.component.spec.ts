import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargarParticipantesComponent } from './cargar-participantes.component';

describe('CargarParticipantesComponent', () => {
  let component: CargarParticipantesComponent;
  let fixture: ComponentFixture<CargarParticipantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargarParticipantesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CargarParticipantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
