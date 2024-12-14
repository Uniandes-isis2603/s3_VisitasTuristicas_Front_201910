import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

import {ViajeroService} from '../viajero.service';
import {ViajeroDetail} from '../viajero-detail';


@Component({
    selector: 'app-viajero-edit',
    templateUrl: './viajero-edit.component.html',
    styleUrls: ['./viajero-edit.component.css']
})
export class ViajeroEditComponent implements OnInit {

    /**
    * The component's constructor
    * @param viajeroService The viajero's service
    * @param toastrService The toastr to show messages to the user 
    */
    constructor(
        private viajeroService: ViajeroService,
        private toastrService: ToastrService
    ) {}

    /**
    * The id of the viajero that the user wants to edit
    * This is passed as a parameter by the parent component
    */
    @Input() viajero_id: number;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an viajero
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user updated a new viajero
    */
    @Output() update = new EventEmitter();

    /**
    * The viajero to edit
    */
    viajero: ViajeroDetail;

    /**
    * Retrieves the information of the viajero
    */
    getViajero(): void {
        this.viajeroService.getViajeroDetail(this.viajero_id)
            .subscribe(viajero => {
                this.viajero = viajero;
            });
    }

    /**
    * Updates the viajero's information
    */
    editViajero(): void {
        this.viajeroService.updateViajero(this.viajero)
            .subscribe(() => {
                this.update.emit();
                this.toastrService.success("The viajero's information was updated", "Viajero edition");
            });
    }

    /**
    * Informs the parent component that the user no longer wants to update the viajero
    */
    cancelEdition(): void {
        this.cancel.emit();
    }

    /**
    * The function which initializes the component
    */
    ngOnInit() {
        this.viajero = new ViajeroDetail();
        this.getViajero();
    }

    /**
    * The function which is called every time the user chooses to edit a different viajero
    */
    ngOnChanges() {
        this.ngOnInit();
    }
}