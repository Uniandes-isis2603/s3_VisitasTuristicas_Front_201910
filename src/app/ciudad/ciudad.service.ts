
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ciudad } from './ciudad';
import { CiudadDetail } from './ciudad-detail';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

const API_URL = environment.apiURL;
const ciudades = '/ciudades';

/**
* El servicio proveedor de todo lo relacionado a las ciudades 
*/
@Injectable()
export class CiudadService {
    
    /**
    * Constructor del servicio
    * @param http The HttpClient - Esto es necesario para desarrollar por requerimientos
    */
    constructor(private http: HttpClient) { }
    
  
    getCiudades() : Observable<Ciudad[]> {
        return this.http.get<Ciudad[]>('http://localhost:8080/s3_turismo-api/api/ciudades/');
    }

     /**
    * Retirna el objeto observable que contiene la ciudad proveida por el API
    * @returns La ciudad
    */
    getCiudadDetail(ciudadId): Observable<CiudadDetail> {
      console.log(ciudadId+" "+API_URL + "ciudad-" + ciudadId+".json");
        return this.http.get<CiudadDetail>('http://localhost:8080/s3_turismo-api/api/ciudades/' + ciudadId);
    }
    
        /**
    * Creates a ciudad
    * @param ciudad La ciudad
    * @returns True Si la ciudad fue publicada, false de otro modo
    */
    createCiudad(ciudad: CiudadDetail): Observable<CiudadDetail> {
    return this.http.post<CiudadDetail>(API_URL + ciudades, ciudad);
  }

    /**
        * Updates a una nueva ciudad
        * @param ciudad la ciudad actualizada
        * @returns La ciudad actualizada
        */
    updateCiudad(ciudad): Observable<CiudadDetail> {
        return this.http.put<CiudadDetail>(API_URL + ciudades + '/' + ciudad.id, ciudad);
    }

    /**
    * Deletes a ciudad
    * @param ciudadId El id de la ciudad
    * @returns True si la ciudad fue borrada, false de otro modo
    */
    deleteCiudad(ciudadId): Observable<CiudadDetail> {
        return this.http.delete<CiudadDetail>(API_URL + ciudades + '/' + ciudadId);
    } 
}
