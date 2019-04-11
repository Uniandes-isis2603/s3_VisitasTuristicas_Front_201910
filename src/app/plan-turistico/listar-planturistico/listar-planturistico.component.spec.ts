import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarPlanturisticoComponent } from './listar-planturistico.component';

describe('ListarPlanturisticoComponent', () => {
  let component: ListarPlanturisticoComponent;
  let fixture: ComponentFixture<ListarPlanturisticoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarPlanturisticoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarPlanturisticoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
