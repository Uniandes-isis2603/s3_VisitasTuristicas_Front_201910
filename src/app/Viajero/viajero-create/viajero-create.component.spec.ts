import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import { ViajeroCreateComponent } from './viajero-create.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {ViajeroService} from '../viajero.service';
import {Viajero} from '../viajero';


describe('ViajeroCreateComponent', () => {
	let component: ViajeroCreateComponent;
	let fixture: ComponentFixture<ViajeroCreateComponent>;
    
    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [
                {
                    provide: APP_BASE_HREF,
                    useValue: ''
                }, 
                ViajeroService,
                {
                    provide: ActivatedRoute,
                    useValue: {
                        snapshot: {
                           paramMap: convertToParamMap({id: 100})
                        }
                    }
                }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(ViajeroCreateComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
});