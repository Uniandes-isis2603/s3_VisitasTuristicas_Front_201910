import {Viajero} from './Viajero'
export class ViajeroDetail extends Viajero{

  /** El arreglo de facturas del viajero **/
  facturas: Array<Factura> = [];

  /** La tarjeta de crédito del usuario **/
  tarjetaDeCredito: TarjetaDeCredito;

}

export class Factura {

  /** El id de la factura en cuestion **/
  id: Number;

  /** Valor de la factura **/
  costo: Number;

  /** La descripción de los productos adquiridos **/
  descripcion: String
}

export class TarjetaDeCredito {

  /** El numero único de la tarjeta **/
  numero: string;

  /** El banco al cual pertenece **/
  banco: string;

  /** El código de seguridad de la tarjeta **/
  codigoSeguridad: Number
}