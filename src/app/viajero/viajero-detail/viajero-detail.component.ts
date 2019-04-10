import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ViajeroService } from '../viajero.service';
import { Viajero } from '../viajero';
import { ViajeroDetail } from '../viajero-detail';
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

  @ViewChild(CrearFacturaComponent) factura: CrearFacturaComponent;


  /**
  * The editorial's id retrieved from the address
  */
  viajero_id: number;

  loader: any;

  crearFactura: boolean;
  /**
  * The method which retrieves the books of an editorial
  */
  getViajeroDetail(): void {

    this.viajeroService.getViajeroDetail(this.viajero_id).subscribe(o => {
        this.viajeroDetail = o
      });
  }

  cambiarBoolean(){
    this.crearFactura = !this.crearFactura;
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