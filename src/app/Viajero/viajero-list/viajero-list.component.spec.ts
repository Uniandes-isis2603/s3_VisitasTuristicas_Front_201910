import { ComponentFixture, TestBed } from '@angular/core/testing';
import {AppRoutingModule} from '../../app-routing/app-routing.module';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppModule } from '../../app.module';

import { ViajeroListComponent } from './viajero-list.component';
import { Viajero } from '../viajero';
import { ViajeroService } from '../viajero.service';

describe('ViajeroComponent', () => {
    let component: ViajeroListComponent;
    let fixture: ComponentFixture<ViajeroListComponent>;
    const viajeros: Viajero[] = require('../../../assets/viajeros.json');

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [AppRoutingModule, HttpClientModule, AppModule],
            declarations: [],
            providers: [{ provide: APP_BASE_HREF, useValue: '' }, ViajeroService]
        })
            .compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ViajeroListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have a list of viajeros', () => {
        component.viajeros = viajeros;
        expect(component.viajeros.length).toEqual(viajeros.length);
    });

    it('an author should be an viajeros (first and last)', () => {
        component.viajeros = viajeros;
        expect(component.viajeros[0].name).toEqual(viajeros[0].name);
        expect(component.viajeros[viajeros.length - 1].name).toEqual(viajeros[viajeros.length - 1].name);
    });

});