import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

import {Factura} from '../viajero-detail'
import { ViajeroService } from '../viajero.service';
import { ViajeroDetail } from '../viajero-detail';
@Component({
    selector: 'app-crear-factura',
    templateUrl: './crear-factura.component.html',
})
export class CrearFacturaComponent implements OnInit, OnChanges {

    constructor(
        private viajeroService: ViajeroService,
    ) { }

    /**
    * The book's id
    */
    @Input() viajero: ViajeroDetail;

    /**
    * The review to post
    */
    factura: Factura;
    
    public isCollapsed = true;

    /**
    * The Event Emitter which sends the signal when a review has just been posted
    * so that the list of reviews refreshes
    */
    @Output() updateReviews = new EventEmitter();

    /**
    * This function posts a review
    * @param reviewForm The form of the review
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
    * The function which initializes the component.
    */
    ngOnInit() {
        this.factura = new Factura();
    }

    /**
    * The function which notices that the input which defines the book_id has changed.
    * If the book has changed, we update the reviews to show
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}

