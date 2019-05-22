import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { CiudadService } from '../ciudad.service';
import { Ciudad } from '../ciudad';
import { CiudadDetail } from '../ciudad-detail';

@Component({
  selector: 'app-listar-sitio',
  templateUrl: './listar-sitio.component.html',
  styleUrls: ['./listar-sitio.component.css']
})
export class ListarSitioComponent implements OnInit {

    /**
  * El componente constructor
  * @param ciudadService el servicio de la ciudad
  * @param route La ruta del elemento que ayuda a obtener el id de la ciudad
  * @param toastrService El toastr para mostrar el mensaje del usuario
  */
 constructor(
  private ciudadService: CiudadService,
  private route: ActivatedRoute
) { }

/**
* La ciudad cuya detail se quiere mostrar
*/
@Input() ciudadDetail: CiudadDetail;



/**
* El id de la ciudad recuperado por la direccion 
*/
ciudad_id: number;

/**
* El método que recupera el pais de la ciudad
*/
getCiudadDetail(): void {
  this.ciudadService.getCiudadDetail(this.ciudad_id)
    .subscribe(ciudadDetail => {
      this.ciudadDetail = ciudadDetail
    });
}

/**
* El método que inicializa el componente
* Necesitamos inicializar la ciudad para que nunca se considere indefinida
*/
ngOnInit() {
  this.ciudad_id = +this.route.snapshot.paramMap.get('id');
  if (this.ciudad_id) {
    this.ciudadDetail = new CiudadDetail();
    this.getCiudadDetail();
  }

}

}
