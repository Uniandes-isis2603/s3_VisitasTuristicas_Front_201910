import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadDetailComponent } from './ciudad-detail.component';

describe('CiudadDetailComponent', () => {
  let component: CiudadDetailComponent;
  let fixture: ComponentFixture<CiudadDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
