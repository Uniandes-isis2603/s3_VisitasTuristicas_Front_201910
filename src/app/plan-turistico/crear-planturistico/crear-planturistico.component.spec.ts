import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPlanTuristicoComponent } from './crear-planturistico.component';

describe('CrearPlanturisticoComponent', () => {
  let component: CrearPlanTuristicoComponent;
  let fixture: ComponentFixture<CrearPlanTuristicoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPlanTuristicoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPlanTuristicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
