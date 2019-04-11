import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPlanturisticoComponent } from './crear-planturistico.component';

describe('CrearPlanturisticoComponent', () => {
  let component: CrearPlanturisticoComponent;
  let fixture: ComponentFixture<CrearPlanturisticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPlanturisticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPlanturisticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
