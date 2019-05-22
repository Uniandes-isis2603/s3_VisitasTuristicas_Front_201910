import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanTuristicoDetailComponent } from './planturistico-detail.component';

describe('PlanturisticoDetailComponent', () => {
  let component: PlanTuristicoDetailComponent;
  let fixture: ComponentFixture<PlanTuristicoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanTuristicoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanTuristicoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
