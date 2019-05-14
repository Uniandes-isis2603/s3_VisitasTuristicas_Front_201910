import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Viajero } from './viajero';
import { ViajeroDetail } from './viajero-detail';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const viajeros = '/viajeros';


/**
* The service provider for everything related to editorials
*/
@Injectable()
export class ViajeroService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of editorials retrieved from the API
    * @returns The list of books in real time
    */
    getViajeros(): Observable<Viajero[]> {
        return this.http.get<Viajero[]>(API_URL + viajeros);
    }

    /**
    * Returns the Observable object containing the editorial retrieved from the API
    * @returns The editorial
    */
    getEditorialDetail(viajeroId): Observable<ViajeroDetail> {
        return this.http.get<ViajeroDetail>(API_URL + viajeros + '/' + viajeroId);
    }
    
    /**
    * Creates an editorial
    * @param viajero The editorial which will be created
    * @returns The confirmation of the editorial's creation
    */
    createEditorial(viajero): Observable<ViajeroDetail> {
        return this.http.post<Viajero>(API_URL + viajeros, viajero);
    }
    
    /**
    * Updates an editorial
    * @param viajero The editorial which will be update
    * @returns The confirmation of the editorial's update
    */
    updateEditorial(viajero): Observable<ViajeroDetail> {
        return this.http.put<ViajeroDetail>(API_URL + viajeros + '/' + viajero.id, viajero);
    }
    
    /**
    * Deletes an editorial
    * @param viajeroId The editorial which will be deleted
    * @returns True if the editorial was deleted, false otherwise
    */
    deleteEditorial(viajeroId): Observable<ViajeroDetail> {
        return this.http.delete<ViajeroDetail>(API_URL + viajeros + '/' + viajeroId);
    }
}