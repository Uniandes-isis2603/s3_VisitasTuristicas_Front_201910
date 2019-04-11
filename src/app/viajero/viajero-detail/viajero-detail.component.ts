import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ViajeroService } from '../viajero.service';
import { Viajero } from '../Viajero';
import { ViajeroDetail, Factura, TarjetaDeCredito } from '../Viajero-detail';
import { CrearFacturaComponent} from '../crear-factura/crear-factura.component';

@Component({
  selector: 'app-viajero-detail',
  templateUrl: './viajero-detail.component.html',
})
export class ViajeroDetailComponent implements OnInit {

  constructor(
    private viajeroService: ViajeroService,
    private route: ActivatedRoute
  ) { }

  /**
  * The editorial whose details we want to show
  */
  @Input() viajeroDetail: ViajeroDetail;

  factura: Factura;

  tarjeta: TarjetaDeCredito;


  /**
  * The editorial's id retrieved from the address
  */
  viajero_id: number;

  loader: any;

  crearFactura: boolean;

  actualizarFactura: boolean;

  actualizarTarjeta: boolean;
  /**
  * The method which retrieves the books of an editorial
  */
  getViajeroDetail(): void {

    this.viajeroService.getViajeroDetail(this.viajero_id).subscribe(o => {
        this.viajeroDetail = o
      });
  }
  
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

  showHideCreate(): void {
    this.actualizarFactura = false;
    this.crearFactura = !this.crearFactura;
  }

  updateFactura(): void{
    this.actualizarFactura = false;
  }

  mostrarActualizarTarjeta(tarjeta){
    if (!this.actualizarTarjeta) {
      this.actualizarTarjeta= true;
      this.tarjeta = tarjeta;
  }
  else { 
      this.actualizarFactura = false;
  }
  }

  updateTarjeta(): void{
    this.actualizarTarjeta = false;
  }

  ngOnInit() {
    this.viajero_id = +this.route.snapshot.paramMap.get('id');
    if (this.viajero_id) {
      this.viajeroDetail = new ViajeroDetail();
      this.getViajeroDetail();
    }
    this.crearFactura=false;
  }


}