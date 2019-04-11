import { Component, OnInit } from '@angular/core';
import { ViajeroService } from '../viajero.service';
import { Viajero } from '../Viajero';
import { ViajeroDetail } from '../Viajero-detail';
import { ViajeroDetailComponent } from '../viajero-detail/viajero-detail.component';
import { CrearViajeroComponent } from '../crear-viajero/crear-viajero.component';
import { Router } from '@angular/router';

@Component({
  selector: 'listar-viajero',
  templateUrl: './listar-viajero.component.html',
})
export class ListarViajeroComponent implements OnInit {

  constructor(private viajeroService: ViajeroService, private router: Router) { }

  crearCliente: boolean;

  actualizar: boolean;

  detail: boolean;

  viajero_id: number;
  selectedViajero: ViajeroDetail;

  viajero: Viajero[];  

  getViajeros(): void {
    this.viajeroService.getViajeros().subscribe(cliente => this.viajero = cliente);
  }

  onSelected(viajero_id: number): void {
    this.crearCliente= false;
    this.actualizar = false;
    this.detail = true;
    this.viajero_id = viajero_id;
    this.selectedViajero = new ViajeroDetail();
    this.getAuthorDetail();
  }

  showHideCreate(): void {
    this.detail = false;
    this.actualizar = false;
    this.crearCliente = !this.crearCliente;
  }

/**
* Shows or hides the create component
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

getAuthorDetail(): void{
  this.viajeroService. getViajeroDetail(this.viajero_id).subscribe(o => {this.selectedViajero = o;
  });
}

updateAuthor(): void{
  this.actualizar = false;
  this.detail = true;
}

  ngOnInit() {
    this.getViajeros();
    console.log("lolazo");
  }
}