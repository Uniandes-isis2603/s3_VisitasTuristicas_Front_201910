import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateViajeroComponent } from './update-viajero.component';

describe('UpdateViajeroComponent', () => {
  let component: UpdateViajeroComponent;
  let fixture: ComponentFixture<UpdateViajeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateViajeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateViajeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
