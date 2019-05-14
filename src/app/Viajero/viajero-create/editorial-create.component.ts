import {Component, OnInit, Output, EventEmitter} from '@angular/core';

import {ToastrService} from 'ngx-toastr';

import {ViajeroService} from '../viajero.service';

import {Viajero} from '../viajero';

@Component({
    selector: 'app-editorial-create',
    templateUrl: './viajero-create.component.html',
    styleUrls: ['./viajero-create.component.css']
})
export class ViajeroCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param editorialService The editorials' services provider
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private editorialService: ViajeroService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new editorial
    */
    editorial: Viajero;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an editorial
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new editorial
    */
    @Output() create = new EventEmitter();

    /**
    * Creates a new editorial
    */
    createViajero(): Viajero {
        this.ViajeroService.createViajero(this.viajero)
            .subscribe((viajero) => {
                this.editorial = viajero;
                this.create.emit();
                this.toastrService.success("The viajero was created", "Viajero creation");
            }, err => {
                this.toastrService.error(err, "Error");
            });
        return this.editorial;
    }

    /**
    * Informs the parent component that the user no longer wants to create an editorial
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.viajero = new Viajero();
    }
}