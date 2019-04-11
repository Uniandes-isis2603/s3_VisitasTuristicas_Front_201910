import {Component, OnInit, Input, OnChanges, Output, EventEmitter} from '@angular/core';
import { ViajeroService } from '../viajero.service';
import { ViajeroDetail } from '../Viajero-detail';

/**
 * Componente para modificar un viajero
 */
@Component({
  selector: 'app-update-viajero',
  templateUrl: './update-viajero.component.html',
  styleUrls: ['./update-viajero.component.css']
})
export class UpdateViajeroComponent implements OnInit {

    /**
    * Constructor para el componente
    * @param viajeroService Proveedor de los servicios del viajero
    */
   constructor(
    private viajeroService: ViajeroService,
) {}

/**
* La información del viajero que se está actualizando
*/
@Input() viajero: ViajeroDetail;

/**
* Dice al componente padre que el componete no quiere ser creado
*/
@Output() cancel = new EventEmitter();

/**
* Dice al componente padre que el viajero ya fue creado
*/
@Output() update = new EventEmitter();

/**
* Modifica la informacion del usuaro
*/
editViajero(): void {
  this.update.emit();
    this.viajeroService.updateViajero(this.viajero)
        .subscribe(() => {
            
        });
}

/**
* Emite la señal para cancelar edicion
*/
cancelEdition(): void {
    this.cancel.emit();
}


/**
* Inicia el componente
*/
ngOnInit() {
  console.log("pruebas");
  console.log(this.viajero);
}

/**
* Se llama cuando se elija otro viajero a modificar
*/
ngOnChanges() {
    this.ngOnInit();
}

}
