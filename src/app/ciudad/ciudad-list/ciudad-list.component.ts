import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Ciudad } from '../ciudad';
import { CiudadDetailComponent } from '../ciudad-detail/ciudad-detail.component';
import { CiudadDetail } from '../ciudad-detail';
import { CiudadService } from '../ciudad.service';

/**
 * El componente para la lista de ciudades de un pais
 */
@Component({
  selector: 'list-ciudad',
  templateUrl: './ciudad-list.component.html',
})
export class CiudadListComponent implements OnInit {

  /**
   * CConstructor del componente
   * @param ciudadService El proveedor de la ruta
   */
  constructor(private ciudadService: CiudadService, private router: Router) { }


  ciudad_id: number;
  selectedCiudad: CiudadDetail;
  crearCiudad: boolean;
  /**
   * La lista de ciudades que pertenecen a la app
   */
  ciudades: Ciudad[];

  /**
   * Le pregunta al servicio para actualizar la lista de ciudades
   */
  getCiudades(): void {
    this.ciudadService.getCiudades().subscribe(ciudades => this.ciudades = ciudades);
  }

  cambiarBoolean(): void {
    this.crearCiudad = !this.crearCiudad;
  }

  onSelected(ciudad_id: number): void {
    if(this.ciudad_id != ciudad_id){
    this.ciudad_id = ciudad_id;
    this.ciudadService.getCiudadDetail(ciudad_id).subscribe(t => this.selectedCiudad = t);
    }
    else{
      this.ciudad_id = null;
      this.selectedCiudad = null;
    }
  }

  /**
   * Inicializa el componente que provee la lista de ciudades del servicio
   * Este método será llamado cuando el componente es creado
   */
  ngOnInit() {
  this.getCiudades();
  }
}
