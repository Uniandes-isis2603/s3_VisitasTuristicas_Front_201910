import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadCreateComponent } from './ciudad-create.component';

describe('CiudadCreateComponent', () => {
  let component: CiudadCreateComponent;
  let fixture: ComponentFixture<CiudadCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
