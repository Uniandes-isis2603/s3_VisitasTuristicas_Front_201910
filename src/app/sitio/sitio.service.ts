import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Sitio } from './sitio';
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const clientes = 'sitio.json';
@Injectable()
export class SitioService {

  constructor(private http: HttpClient) { }

/*
*Metodo que retorna los sitios turisticos
*@return sitios
*/
  getSitios(): Observable<Sitio[]> {
    return this.http.get<Sitio[]>(API_URL + clientes);
  }

/*
*Metodo que crea los sitios turisticos y retorna el sitio creado
*@return sitios
*/
  createSitio(cliente: Sitio): Observable<Sitio> {
    return this.http.post<Sitio>(API_URL + clientes, cliente);
  }

}
