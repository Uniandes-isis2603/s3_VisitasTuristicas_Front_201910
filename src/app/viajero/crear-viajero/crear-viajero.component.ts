import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';

import {ViajeroService} from '../viajero.service';
import {ViajeroDetail} from '../Viajero-detail';
import {TarjetaDeCredito} from '../Viajero-detail'

/**
 * Componente que se encarga de crear el viajero
 */
@Component({
  selector: 'app-crear-viajero',
  templateUrl: './crear-viajero.component.html',
})
export class CrearViajeroComponent implements OnInit {

  /**
   * Constructor de la clase
   * @param viajeroService proveedor de los servicios
   */
  constructor(
    private viajeroService: ViajeroService,
    private router: Router
  ) {}

  /**
   * El viajero a crear
   */
  viajeroDetail: ViajeroDetail;

  /**
   * La tarjeta de credito a crear
   */
  tarjeta: TarjetaDeCredito;

  /**
   * Define si aún se está haciendo la tarjeta
   */
  creandoTarjeta: boolean;

  /**
   * Crea el cliente y lo persiste
   */
  createCliente(): ViajeroDetail {
    this.viajeroDetail.tarjetaDeCredito=this.tarjeta;
    console.log(this.viajeroDetail);
    this.viajeroService.createViajero(this.viajeroDetail)
    .subscribe((viajero) => {
      this.viajeroDetail = viajero;
    });
    return this.viajeroDetail;
  }

  /**
   * Crea la tarjeta de credito del viajero
   */
  createTarjeta(): TarjetaDeCredito{
    console.log(this.tarjeta);
    this.creandoTarjeta = !this.creandoTarjeta;
    return this.tarjeta;
  }


  ngOnInit() {
    this.viajeroDetail = new ViajeroDetail();
    this.tarjeta = new TarjetaDeCredito();
    this.creandoTarjeta = false;
    console.log(this.creandoTarjeta);
  }


}