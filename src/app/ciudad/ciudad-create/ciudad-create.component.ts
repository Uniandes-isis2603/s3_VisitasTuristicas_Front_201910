import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';

import {CiudadService} from '../ciudad.service';
import {CiudadDetail} from '../ciudad-detail';
//import {SitioTuristico} from '../sitioTuristico-detail';


@Component({
  selector: 'app-ciudad-create',
  templateUrl: './ciudad-create.component.html',
  styleUrls: ['./ciudad-create.component.css']
})
export class CiudadCreateComponent implements OnInit {

  constructor(
    private ciudadService: CiudadService,
    private router: Router
  ) { }

  ciudadDetail: CiudadDetail;

  //sitio: SitioTuristico;

  creandoSitio: boolean;

  createCiudad(): CiudadDetail {
    console.log(this.ciudadDetail);
    //this.ciudadDetail.sitioTuristico=this.sitio;
    this.ciudadService.createCiudad(this.ciudadDetail)
    .subscribe((ciudad) => {
      this.ciudadDetail = ciudad;
    });
    return this.ciudadDetail;
  }

  //createSitio(): SitioTuristico{
    //console.log(this.sitio);
    //this.creandoSitio = !this.creandoSitio;
    //return this.sitio;
  //}

  ngOnInit() {
      this.ciudadDetail = new CiudadDetail();
    //this.sitio = new SitioTuristico();
    this.creandoSitio = false;
    console.log(this.creandoSitio);
  }

}
