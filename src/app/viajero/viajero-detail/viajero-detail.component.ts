import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ViajeroService } from '../viajero.service';
import { Viajero } from '../Viajero';
import { ViajeroDetail, Factura, TarjetaDeCredito } from '../Viajero-detail';
import { CrearFacturaComponent} from '../crear-factura/crear-factura.component';

/**
 * El componente que muestra el detalle del viajero
 */
@Component({
  selector: 'app-viajero-detail',
  templateUrl: './viajero-detail.component.html',
})
export class ViajeroDetailComponent implements OnInit {

  /**
   * Constructor de la clase
   * @param viajeroService El que provee los servicios para la persistencia
   * @param route 
   */
  constructor(
    private viajeroService: ViajeroService,
    private route: ActivatedRoute
  ) { }

  /**
  * El viajero con la información a mostrar
  */
  @Input() viajeroDetail: ViajeroDetail;

  /**
   * La factura que voy a modificar
   */
  factura: Factura;

  /**
   * La tarjeta de credito que voy a modificar
   */
  tarjeta: TarjetaDeCredito;


  /**
  * El id del viajero que estoy desplegando
  */
  viajero_id: number;

  loader: any;

  /**
   * Para definir si se esta crando una factura
   */
  crearFactura: boolean;

  /**
   * Define si se esta actualizando una factura
   */
  actualizarFactura: boolean;

  /**
   * Define si se esta actualizando la tarjeta
   */
  actualizarTarjeta: boolean;
  /**
  * Consigue la informacion del viajero
  */
  getViajeroDetail(): void {

    this.viajeroService.getViajeroDetail(this.viajero_id).subscribe(o => {
        this.viajeroDetail = o
      });
  }
  
  /**
   * Se encarga de mostrar el formulario para actualizar una factura
   * @param factura información de la factura a actualizar
   */
  mostrarActualizar(factura){
    if (!this.actualizarFactura) {
      this.crearFactura= false;
      this.actualizarFactura = true;
      this.factura = factura;
  }
  else { 
      this.actualizarFactura = false;
  }
  }

  /**
   * Muestra o oculta el componente para crear
   */
  showHideCreate(): void {
    this.actualizarFactura = false;
    this.crearFactura = !this.crearFactura;
  }

  /**
   * Quita el componente para actualizar
   */
  updateFactura(): void{
    this.actualizarFactura = false;
  }

  /**
   * Añade o elimina el componente para actualizar una tarjeta
   * @param tarjeta Información de la tarjeta a modificar
   */
  mostrarActualizarTarjeta(tarjeta){
    if (!this.actualizarTarjeta) {
      this.actualizarTarjeta= true;
      this.tarjeta = tarjeta;
  }
  else { 
      this.actualizarFactura = false;
  }
  }

  /**
   * Quita el componente de actualizar una tarjeta
   */
  updateTarjeta(): void{
    this.actualizarTarjeta = false;
  }

  /**
   * Este metodo definirá los estados iniciales de las variables
   * Se ejecuta al crearse el componente
   */
  ngOnInit() {
    this.viajero_id = +this.route.snapshot.paramMap.get('id');
    if (this.viajero_id) {
      this.viajeroDetail = new ViajeroDetail();
      this.getViajeroDetail();
    }
    this.crearFactura=false;
  }


}