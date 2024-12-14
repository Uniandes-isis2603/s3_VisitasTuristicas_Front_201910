import {ComponentFixture, TestBed, getTestBed} from '@angular/core/testing';
import {APP_BASE_HREF} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';

import {Viajero} from './Viajero';
import {ViajeroService} from './Viajero.service';
import {AppModule} from '../app.module';


describe('Service: ViajeroService', () => {
    let injector: TestBed;
    let service: ViajeroService;
	const editorials: Viajero[] = require('../../assets/viajeros.json');
    
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule, AppModule],
            declarations: [],
            providers: [{provide: APP_BASE_HREF, useValue: ''}, ViajeroService]
        });
        injector = getTestBed();
        service = injector.get(ViajeroService);
    });
    
    it('#getEditorials should return value from observable',
    (done: DoneFn) => {
    service.getViajeros().subscribe(value => {
        expect(value.length).toBeGreaterThan(0);
        done();
        });
    });
	
	it('#createEditorial should return value from observable',
    (done: DoneFn) => {
    let viajero:Viajero = {id:100,name:"prueba"};
    service.createViajero(viajero).subscribe(value => {
        expect(value.name).toEqual(viajero.name);
        done();
        });
    });
	
	it('#getEditorialDetail should return value from observable',
    (done: DoneFn) => {
    service.getViajeroDetail(viajeros[0].id).subscribe(value => {
        expect(value.name).toEqual(viajeros[0].name);
        done();
        });
    });
	
	it('#updateEditorial should return the editorial updated',
    (done: DoneFn) => {
	let viajero:Viajero = {id:100,name:"prueba"};
    service.updateViajero(viajero).subscribe(value => {
        expect(value.name).toEqual(viajero.name);
        done();
        });
    });
    
});
