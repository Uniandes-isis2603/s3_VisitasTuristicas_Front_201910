import { Component, OnInit } from '@angular/core';
import { ViajeroService } from '../viajero.service';
import { Viajero } from '../viajero';
import { ViajeroDetail } from '../viajero-detail';
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

  viajero_id: number;
  selectedViajero: ViajeroDetail;

  viajero: Viajero[];  

  getViajeros(): void {
    this.viajeroService.getViajeros().subscribe(cliente => this.viajero = cliente);
  }

  onSelected(editorial_id: number): void {
    if(this.crearCliente)
    {
      this.cambiarBoolean();
    }
    console.log(this.crearCliente);
    console.log(this.viajero);
    this.viajero_id = editorial_id;
    console.log("lol");
    this.selectedViajero = new ViajeroDetail();
    this.viajeroService. getViajeroDetail(editorial_id).subscribe(o => {this.selectedViajero = o;
    console.log("lolazo");
    console.log(o);
    console.log("lolazo");
    console.log(this.selectedViajero)}
    );
  }

  cambiarBoolean(): void{
    this.crearCliente = !this.crearCliente;
  }

  ngOnInit() {
    this.getViajeros();
    console.log("lolazo");
  }
}