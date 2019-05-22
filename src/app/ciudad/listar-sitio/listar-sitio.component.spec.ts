import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarSitioComponent } from './listar-sitio.component';

describe('ListarSitioComponent', () => {
  let component: ListarSitioComponent;
  let fixture: ComponentFixture<ListarSitioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarSitioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarSitioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
