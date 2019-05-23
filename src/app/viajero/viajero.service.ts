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

/**
 * El servició de todo lo relacionado con Viajero
 */
@Injectable()
export class ViajeroService {

  /**
   * Constructor del servicio
   * @param http el HttpClient, necesario para las peticiones de http
   */
  constructor(private http: HttpClient) { }

  /**
   * Retorna la lista de Viajeros como observables que se encuentran en la base de datos
   */
  getViajeros() : Observable<Viajero[]> {
        return this.http.get<Viajero[]>('http://localhost:8080/s3_turismo-api/api/viajero/');
  }

  /**
   * Obtiene un observable del viajero que entra por id si se encuentra en la base de datos
   */
  getViajeroDetail(viajeroId): Observable<ViajeroDetail> {
    console.log(viajeroId);
    return this.http.get<ViajeroDetail>('http://localhost:8080/s3_turismo-api/api/viajero/' + viajeroId);
  }

  /**
   * Maneja la peticion para anadir un viajero a la base de datos
   * @param cliente Información del cliente que se va a persistir
   */
  createViajero(cliente: ViajeroDetail): Observable<ViajeroDetail> {
    return this.http.post<ViajeroDetail>(API_URL + clientes, cliente);
  }

  /**
   * Maneja la petición para crear una tarjeta de crédito
   * @param tarjeta Información de la tarjeta a persistir
   */
  createTarjetaDeCredito(tarjeta: TarjetaDeCredito): Observable<TarjetaDeCredito> {
    return this.http.post<TarjetaDeCredito>(API_URL + tarjetas, tarjeta);
  }

  /**
   * Persiste y retorna la factura que recibe como parámetro
   * @param viajeroId el id del viajero a quien le va a pertenecer la factura 
   * @param factura la factura a persistir
   */
  createFactura(viajeroId, factura): Observable<Factura> {
        return this.http.post<Factura>(API_URL + "viajeros" + '/' + viajeroId + "/facturas", factura);
  }

  /**
   * Actualiza y retorna un obsevable del recurso acutalizado de viajero
   * @param viajero la nueva información del viajero
   */
  updateViajero(viajero): Observable<ViajeroDetail> {
    return this.http.put<ViajeroDetail>(API_URL + "viajeros/" + viajero.id, viajero);
  }

  /**
   * Actualiza la información de una factura y retorna el obsevable del objeto actualizado
   * @param viajero_id id del viajero al cual se le va a modificar la factura
   * @param factura nueva informacion de la factura
   */
  updateFactura(viajero_id,factura): Observable<Factura> {
    return this.http.put<Factura>(API_URL + "viajeros/" + viajero_id+"/facturas/"+factura.id, factura);
  }

  /**
   * Actualiza y retorna un observable del objeto actualizado de tipo tarjeta de credito
   * @param viajero_id el id del viajero a quien voy a modificar la tarjeta
   * @param tarjeta la tarjeta que va a ser modificada
   */
  updateTarjeta(viajero_id,idtarjeta,tarjeta): Observable<TarjetaDeCredito> {
    return this.http.put<TarjetaDeCredito>('http://localhost:8080/s3_turismo-api/api/viajero/' + viajero_id + '/' + idtarjeta , tarjeta);
  }
}