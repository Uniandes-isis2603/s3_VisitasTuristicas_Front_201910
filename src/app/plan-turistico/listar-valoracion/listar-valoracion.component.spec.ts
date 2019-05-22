import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarValoracionComponent } from './listar-valoracion.component';

describe('ListarValoracionComponent', () => {
  let component: ListarValoracionComponent;
  let fixture: ComponentFixture<ListarValoracionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarValoracionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarValoracionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
