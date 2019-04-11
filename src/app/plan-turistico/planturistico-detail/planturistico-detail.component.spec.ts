import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanturisticoDetailComponent } from './planturistico-detail.component';

describe('PlanturisticoDetailComponent', () => {
  let component: PlanturisticoDetailComponent;
  let fixture: ComponentFixture<PlanturisticoDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanturisticoDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanturisticoDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
