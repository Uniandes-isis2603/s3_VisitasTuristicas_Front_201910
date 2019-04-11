import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';

import {SitioService} from '../sitio.service';
import {Sitio} from '../sitio';
@Component({
  selector: 'app-crear-sitio',
  templateUrl: './crear-sitio.component.html',
  styleUrls: ['./crear-sitio.component.css']
})
export class CrearSitioComponent implements OnInit {

 constructor(
   /*
   *Atributo sitioService
   */
    private sitioService: SitioService,

    /*
    *Atributo que representa los router
    */
    private router: Router,

    /*
    *Atributo que representa un sitio turistico
    */
    private sitio:Sitio

  ) {}



/*
*Crea el sitio turistico
*@Return sitio
*
*/
  createSitio(): Sitio {
    this.sitioService.createSitio(this.sitio)
    .subscribe((sitio) => {
      this.sitio = sitio;
    });
    return this.sitio;
  }

  


  ngOnInit() {
    this.sitio = new Sitio();
    
  }

}
