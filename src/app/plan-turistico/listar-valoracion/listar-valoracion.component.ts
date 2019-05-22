import { Component, OnInit } from '@angular/core';
import {Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { valoracion } from '../planturistico-detail';


@Component({
  selector: 'app-listar-valoracion',
  templateUrl: './listar-valoracion.component.html',
  styleUrls: ['./listar-valoracion.component.css']
})
export class ListarValoracionComponent implements OnInit {

  ratingClicked: number;
  itemIdRatingClicked: string;

  @Input() valoracion: valoracion[];


  toStar(Numero): boolean[]{
    let aRet: boolean[] = new Array(5);
    for (var i = 0; i < 5; i++) {
      if(Numero > i)
      {
        aRet[i] = true;
      }else{
        aRet[i] = false;
      }
    }
    return aRet;
  }
  
constructor() { }

  ngOnInit() {
  }

}
