import {Ciudad} from "./ciudad";

export class CiudadDetail extends Ciudad{
  sitiosTuristicosDto: Array<SitioTuristico> = [];
}
class SitioTuristico {
  id: number;

  tipo: String;

  nombre: String
}