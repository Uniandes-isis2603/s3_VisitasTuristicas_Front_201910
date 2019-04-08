import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarViajeroComponent } from './listar-viajero.component';

describe('ListarViajeroComponent', () => {
  let component: ListarViajeroComponent;
  let fixture: ComponentFixture<ListarViajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarViajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarViajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
