import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PlanturisticoDetail } from './planturistico-detail';
import { Planturistico } from './planTuristico';
import { Factura } from '../viajero/Viajero-detail';
import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const clientes = '/planesTuristicos';


@Injectable()
export class PlanturisticoService {

  constructor(private http: HttpClient) { }

  getPlanesTuristicos() : Observable<Planturistico[]> {
        return this.http.get<Planturistico[]>('http://localhost:8080/s3_turismo-api/api/planesTuristicos');
  }

 getPlanTuristicoDetail(planTuristicoId): Observable<PlanturisticoDetail> {
    console.log(planTuristicoId);
    return this.http.get<PlanturisticoDetail>('http://localhost:8080/s3_turismo-api/api/planesTuristicos/'+ planTuristicoId);
  }

  createPlanTuristico(cliente: PlanturisticoDetail): 
  Observable<PlanturisticoDetail> {
    return this.http.post<PlanturisticoDetail>(API_URL + clientes, cliente);
  }

    /**
   * Actualiza la información de una factura y retorna el obsevable del objeto actualizado
   * @param viajero_id id del viajero al cual se le va a modificar la factura
   * @param factura nueva informacion de la factura
   */
  updateFactura(viajero_id,factura): Observable<Factura> {
    console.log(viajero_id);
    console.log(factura);
    return this.http.post<Factura>('http://localhost:8080/s3_turismo-api/api/viajero/'+ viajero_id +'/facturas', factura);
  }

}
