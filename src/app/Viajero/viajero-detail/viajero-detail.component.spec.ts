import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {ActivatedRoute, convertToParamMap} from '@angular/router';

import {AppModule} from '../../app.module';
import {ViajeroDetailComponent} from './viajero-detail.component';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import {ViajeroService} from '../viajero.service';
import {Viajero} from '../viajero';

describe('ViajeroDetailComponent', () => {
    let component: ViajeroDetailComponent;
    let fixture: ComponentFixture<ViajeroDetailComponent>;
    
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
        fixture = TestBed.createComponent(ViajeroDetailComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    
});