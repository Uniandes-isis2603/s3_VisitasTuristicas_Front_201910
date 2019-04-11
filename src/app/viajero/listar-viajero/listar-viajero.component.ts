import { Component, OnInit } from '@angular/core';
import { ViajeroService } from '../viajero.service';
import { Viajero } from '../Viajero';
import { ViajeroDetail } from '../Viajero-detail';
import { ViajeroDetailComponent } from '../viajero-detail/viajero-detail.component';
import { CrearViajeroComponent } from '../crear-viajero/crear-viajero.component';
import { Router } from '@angular/router';

/**
 * Componente encargado de listar los viajeros
 */
@Component({
  selector: 'listar-viajero',
  templateUrl: './listar-viajero.component.html',
})
export class ListarViajeroComponent implements OnInit {

  /**
   * Constructor de la clase
   * @param viajeroService El que provee los servicios de viajero 
   */
  constructor(private viajeroService: ViajeroService, private router: Router) { }

  /**
   * Dice si se esta creando un viajero, false significa que no 
   */
  crearCliente: boolean;

  /**
   * Indica si se esta actualizando un viajero, false si no 
   */
  actualizar: boolean;

  /**
   * Dice si se esta despegando un detalle, false si no
   */
  detail: boolean;

  /**
   * Id del viajero que se selecciona
   */
  viajero_id: number;

  /**
   * Informacion del viajero seleccionado
   */
  selectedViajero: ViajeroDetail;

  /**
   * Lista de viajeros a desplegar
   */
  viajero: Viajero[];  

  /**
   * Consigue la lista de viajeros
   */
  getViajeros(): void {
    this.viajeroService.getViajeros().subscribe(cliente => this.viajero = cliente);
  }

  /**
   * Consigue la informacion del viajero con el id que recibe como parametro
   * @param viajero_id Id del viajero a buscar
   */
  onSelected(viajero_id: number): void {
    this.crearCliente= false;
    this.actualizar = false;
    this.detail = true;
    this.viajero_id = viajero_id;
    this.selectedViajero = new ViajeroDetail();
    this.getAuthorDetail();
  }

  /**
   * Muestra u oculta el componente para crear un viajero
   */
  showHideCreate(): void {
    this.detail = false;
    this.actualizar = false;
    this.crearCliente = !this.crearCliente;
  }

/**
* Muestra u oculta el componente de actualizar un viajero
*/
showHideEdit(viajero_id: number): void {
    if (!this.actualizar || (this.actualizar && viajero_id != this.selectedViajero.id)) {
        this.detail = false;
        this.crearCliente= false;
        this.actualizar = true;
        this.viajero_id = viajero_id;
        this.selectedViajero = new ViajeroDetail();
        this.getAuthorDetail();
    }
    else { 
        this.actualizar = false;
        this.detail = true;
    }
}

/**
 * Pide al servicio la informacion del viajero con el id de la clase
 */
getAuthorDetail(): void{
  this.viajeroService. getViajeroDetail(this.viajero_id).subscribe(o => {this.selectedViajero = o;
  });
}

/**
 * Me permite desplegar el detail una vez se ha realizado alguna modificacion
 */
updateViajero(): void{
  this.actualizar = false;
  this.detail = true;
}

/**
 * Se ejecuta siempre al iniciar el componente
 */
ngOnInit() {
    this.getViajeros();
    console.log("lolazo");
  }
}