import {Viajero} from './Viajero'
export class ViajeroDetail extends Viajero{
  facturas: Array<Factura> = [];
  tarjetaDeCredito: TarjetaDeCredito;

}

export class Factura {
  id: Number;
  costo: Number;
  descripcion: String
}

export class TarjetaDeCredito {
  numero: string;
  banco: string;
  codigoSeguridad: Number
}