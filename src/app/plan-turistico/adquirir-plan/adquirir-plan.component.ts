import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PlanturisticoService } from '../planturistico.service';
import { Router } from '@angular/router';

import { Factura } from '../../viajero/Viajero-detail';
import { PlanturisticoDetail } from '../planturistico-detail';

@Component({
  selector: 'app-adquirir-plan',
  templateUrl: './adquirir-plan.component.html',
  styleUrls: ['./adquirir-plan.component.css']
})
export class AdquirirPlanComponent implements OnInit {

   /**
     * Constructor del componente
     * @param planService El que maneja los servicios de viajero
     */
    constructor(
      private planService: PlanturisticoService,
  ) { }

  /**
  * El viajero al cual deseo agregar la factura
  */

  /**
  * La factura a crear
  */
  idUsuario: number;

  personas: number;

  factura: Factura;
  
  public isCollapsed = true;


  @Input() planTuristico: PlanturisticoDetail;
  /**
  * Avisa al padre cuando se termina e proceso
  */
  @Output() updateReviews = new EventEmitter();

  /**
   * Persiste la factura en la base de datos
   */
  createFactura(): Factura{
      this.factura.descripcion = this.planTuristico.descripcion;
      let costo: number = this.planTuristico.costoPorPersona;
      this.factura.costo = this.personas * costo;
      console.log(this.factura);
      console.log(this.idUsuario);
      this.planService.updateFactura(this.idUsuario,this.factura)
          .subscribe(() => {
              this.updateReviews.emit();
          })
      return this.factura;
  }

  /**
  * Se ejecuta al iniciar el componente
  */
  ngOnInit() {
      this.factura = new Factura();
      this.personas = 1;
  }

  /**
  * Mira que no se haya cambiado el viajero, en caso de que si, se ejecuta.
  */
  ngOnChanges() {
      this.ngOnInit();
  }
}
