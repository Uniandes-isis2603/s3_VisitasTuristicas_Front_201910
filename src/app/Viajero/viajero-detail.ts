import { Viajero } from './viajero';
import { Preferencia } from '../preferencia/preferencia';
import { Factura } from '../factura/factura';
/**
* This class represents an editorialDetail of the BookStore. 
* It contains all the information relevant to the editorial.
*/
export class ViajeroDetail extends Viajero {


    /**
     * The editorial's books
     */
    preferencias: Preferencia[];

    facturas: Factura[];
}