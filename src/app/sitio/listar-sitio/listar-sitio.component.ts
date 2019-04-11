import { Component, OnInit } from '@angular/core';
import { SitioService } from '../sitio.service';
import { Sitio } from '../sitio';
import { Router } from '@angular/router';
@Component({
  selector: 'app-listar-sitio',
  templateUrl: './listar-sitio.component.html',
  styleUrls: ['./listar-sitio.component.css']
})
export class ListarSitioComponent implements OnInit {

 constructor(private sitioService: SitioService, private router: Router) { }

  sitio_id: number;

  sitio: Sitio[];  

  getSitios(): void {
    this.sitioService.getSitios().subscribe(cliente => this.sitio = cliente);
  }

 
  

  ngOnInit() {
    this.getSitios();
  }

}
