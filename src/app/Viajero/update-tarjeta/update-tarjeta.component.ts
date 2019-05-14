import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { ViajeroService } from '../viajero.service';
import { ViajeroDetail, TarjetaDeCredito } from '../Viajero-detail';

/**
 * Componente para crear una tarjeta
 */
@Component({
  selector: 'app-update-tarjeta',
  templateUrl: './update-tarjeta.component.html',
  styleUrls: ['./update-tarjeta.component.css']
})
export class UpdateTarjetaComponent implements OnInit {

  /**
   * Constructor del componente
   * @param viajeroService Servicios del componente
   */
  constructor(
    private viajeroService: ViajeroService,
) {}

/**
* El viajero al cual voy a modificar la factura
*/
@Input() viajero: ViajeroDetail;

/**
 * La informacion de la tarjeta a modificar
 */
@Input() tarjeta : TarjetaDeCredito;

/**
* Avisa que no quiero crear mas una tarjeta al padre
*/
@Output() cancel = new EventEmitter();

/**
* Avisa al padre que el ya se hizo la modificacion
*/
@Output() update = new EventEmitter();

/**
* Actualiza la informacion de la tarjeta
*/
editTarjeta(): void {
    this.update.emit();
    this.viajeroService.updateTarjeta(this.viajero.id, this.tarjeta)
        .subscribe(() => {
            
        });
}

/**
* Emite la señal para cancelar la edicion
*/
cancelEdition(): void {
    this.cancel.emit();
}


/**
* Se ejecuta al inicializarcie el componente
*/
ngOnInit() {
  console.log("pruebas");
  console.log(this.viajero);
}

/**
* Al elejir otra tarjeta
*/
ngOnChanges() {
    this.ngOnInit();
}

}
