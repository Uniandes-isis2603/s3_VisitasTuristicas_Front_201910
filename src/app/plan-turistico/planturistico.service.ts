import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { PlanturisticoDetail } from './planturistico-detail';
import { Planturistico } from './planTuristico';

const API_URL = "../../assets/";
const clientes = 'planesTuristicos.json';


@Injectable()
export class PlanturisticoService {

  constructor(private http: HttpClient) { }

  getPlanesTuristicos() : Observable<Planturistico[]> {
        return this.http.get<Planturistico[]>(API_URL + clientes);
  }

 getPlanTuristicoDetail(planTuristicoId): Observable<PlanturisticoDetail> {
    console.log(planTuristicoId+" "+API_URL + "data-" + planTuristicoId+".json");
    return this.http.get<PlanturisticoDetail>(API_URL + "planesTuristicos-" + planTuristicoId+".json");
  }

  createPlanTuristico(cliente: PlanturisticoDetail): 
  Observable<PlanturisticoDetail> {
    return this.http.post<PlanturisticoDetail>(API_URL + clientes, cliente);
  }

  
}
