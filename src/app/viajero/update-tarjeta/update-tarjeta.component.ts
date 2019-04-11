import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { ViajeroService } from '../viajero.service';
import { ViajeroDetail, TarjetaDeCredito } from '../Viajero-detail';

@Component({
  selector: 'app-update-tarjeta',
  templateUrl: './update-tarjeta.component.html',
  styleUrls: ['./update-tarjeta.component.css']
})
export class UpdateTarjetaComponent implements OnInit {

  constructor(
    private viajeroService: ViajeroService,
) {}

/**
* The author id as received from the parent component
*/
@Input() viajero: ViajeroDetail;

@Input() tarjeta : TarjetaDeCredito;

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
editTarjeta(): void {
    this.update.emit();
    this.viajeroService.updateTarjeta(this.viajero.id, this.tarjeta)
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
