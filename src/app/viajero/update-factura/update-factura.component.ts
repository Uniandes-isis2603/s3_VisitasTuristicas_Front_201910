import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { ViajeroService } from '../viajero.service';
import { ViajeroDetail, Factura } from '../Viajero-detail';

@Component({
  selector: 'app-update-factura',
  templateUrl: './update-factura.component.html',
  styleUrls: ['./update-factura.component.css']
})
export class UpdateFacturaComponent implements OnInit {

  constructor(
    private viajeroService: ViajeroService,
) {}

/**
* The author id as received from the parent component
*/
@Input() viajero: ViajeroDetail;

@Input() factura: Factura;

/**
* The output which tells the parent component
* that the user no longer wants to create an author
*/
@Output() cancel = new EventEmitter();

/**
* The output which tells the parent component
* that the user updated a new author
*/
@Output() update = new EventEmitter();

/**
* Updates the information of the author
*/
editFactura(): void {
    this.update.emit();
    this.viajeroService.updateFactura(this.viajero.id, this.factura)
        .subscribe(() => {
            
        });
}

/**
* Emits the signal to tell the parent component that the
* user no longer wants to create an user
*/
cancelEdition(): void {
    this.cancel.emit();
}


/**
* This function will initialize the component
*/
ngOnInit() {
  console.log("pruebas");
  console.log(this.viajero);
}

/**
* This function will be called when the user chooses another author to edit
*/
ngOnChanges() {
    this.ngOnInit();
}

}
