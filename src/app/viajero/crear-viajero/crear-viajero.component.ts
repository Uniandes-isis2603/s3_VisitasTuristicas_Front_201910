import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';

import {ViajeroService} from '../viajero.service';
import {ViajeroDetail} from '../Viajero-detail';
import {TarjetaDeCredito} from '../Viajero-detail'

@Component({
  selector: 'app-crear-viajero',
  templateUrl: './crear-viajero.component.html',
})
export class CrearViajeroComponent implements OnInit {

  constructor(
    private viajeroService: ViajeroService,
    private router: Router
  ) {}

  viajeroDetail: ViajeroDetail;

  tarjeta: TarjetaDeCredito;

  creandoTarjeta: boolean;

  createCliente(): ViajeroDetail {
    this.viajeroDetail.tarjetaDeCredito=this.tarjeta;
    console.log(this.viajeroDetail);
    this.viajeroService.createViajero(this.viajeroDetail)
    .subscribe((viajero) => {
      this.viajeroDetail = viajero;
    });
    return this.viajeroDetail;
  }

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