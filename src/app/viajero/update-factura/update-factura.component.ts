import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { ViajeroService } from '../viajero.service';
import { ViajeroDetail, Factura } from '../Viajero-detail';

/**
 * Componente encargado de actualizar las facturas
 */
@Component({
  selector: 'app-update-factura',
  templateUrl: './update-factura.component.html',
  styleUrls: ['./update-factura.component.css']
})

export class UpdateFacturaComponent implements OnInit {
  /**
   * Constructor de la clase
   * @param viajeroService El que provee los servicios de viajero
   */
  constructor(
    private viajeroService: ViajeroService,
) {}

/**
* Información del autor al que quiero modificar la factura
*/
@Input() viajero: ViajeroDetail;

/**
 * Información de la factura a actualizar
 */
@Input() factura: Factura;

/**
* Avisa al componente padre que se cancelo el proceso de actualizacion
*/
@Output() cancel = new EventEmitter();

/**
 * Avisa al componente padre que se actualizo
 */
@Output() update = new EventEmitter();

/**
* Actualiza la informacion de la factura
*/
editFactura(): void {
    this.update.emit();
    this.viajeroService.updateFactura(this.viajero.id, this.factura)
        .subscribe(() => {
            
        });
}

/**
* Emite una señal al padre para avisar que no se esta actualizando mas
*/
cancelEdition(): void {
    this.cancel.emit();
}


/**
* La funcion se corre al inicializarse el componente
*/
ngOnInit() {
  console.log("pruebas");
  console.log(this.viajero);
}

/**
* Es una funcion que es llamada al elegir otra factura a modificar
*/
ngOnChanges() {
    this.ngOnInit();
}

}
