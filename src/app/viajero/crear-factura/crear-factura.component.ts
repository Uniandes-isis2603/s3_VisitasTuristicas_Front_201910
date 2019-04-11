import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Factura} from '../Viajero-detail'
import { ViajeroService } from '../viajero.service';
import { ViajeroDetail } from '../Viajero-detail';

/**
 * Componente para crear una factura
 */
@Component({
    selector: 'app-crear-factura',
    templateUrl: './crear-factura.component.html',
})
export class CrearFacturaComponent implements OnInit, OnChanges {

    /**
     * Constructor del componente
     * @param viajeroService El que maneja los servicios de viajero
     */
    constructor(
        private viajeroService: ViajeroService,
    ) { }

    /**
    * El viajero al cual deseo agregar la factura
    */
    @Input() viajero: ViajeroDetail;

    /**
    * La factura a crear
    */
    factura: Factura;
    
    public isCollapsed = true;

    /**
    * Avisa al padre cuando se termina e proceso
    */
    @Output() updateReviews = new EventEmitter();

    /**
     * Persiste la factura en la base de datos
     */
    createFactura(): Factura{
        console.log(this.factura);
        this.viajeroService.createFactura(this.viajero.id,this.factura)
            .subscribe(() => {
                this.updateReviews.emit();
            })
        return this.factura;
    }

    /**
    * Se ejecuta al iniciar el componente
    */
    ngOnInit() {
        this.factura = new Factura();
    }

    /**
    * Mira que no se haya cambiado el viajero, en caso de que si, se ejecuta.
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}

