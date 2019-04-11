import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Viajero } from './Viajero';
import { ViajeroDetail } from './Viajero-detail';
import {Factura} from './Viajero-detail'
import {TarjetaDeCredito} from './Viajero-detail'
import { Observable } from 'rxjs';

const API_URL = "../../assets/";
const clientes = 'viajeros.json';
const tarjetas = 'tarjetas.json';

@Injectable()
export class ViajeroService {

  constructor(private http: HttpClient) { }

  getViajeros() : Observable<Viajero[]> {
        return this.http.get<Viajero[]>(API_URL + clientes);
  }

  getViajeroDetail(viajeroId): Observable<ViajeroDetail> {
    console.log(viajeroId+" "+API_URL + "data-" + viajeroId+".json");
    return this.http.get<ViajeroDetail>(API_URL + "viajeros-" + viajeroId+".json");
  }

  createViajero(cliente: ViajeroDetail): Observable<ViajeroDetail> {
    return this.http.post<ViajeroDetail>(API_URL + clientes, cliente);
  }

  createTarjetaDeCredito(tarjeta: TarjetaDeCredito): Observable<TarjetaDeCredito> {
    return this.http.post<TarjetaDeCredito>(API_URL + tarjetas, tarjeta);
  }

  createFactura(viajeroId, factura): Observable<Factura> {
        return this.http.post<Factura>(API_URL + "viajeros" + '/' + viajeroId + "/facturas", factura);
  }

  updateViajero(viajero): Observable<ViajeroDetail> {
    return this.http.put<ViajeroDetail>(API_URL + "viajeros/" + viajero.id, viajero);
  }
  updateFactura(viajero_id,factura): Observable<Factura> {
    return this.http.put<Factura>(API_URL + "viajeros/" + viajero_id+"/facturas/"+factura.id, factura);
  }
}