import {Ciudad} from "./ciudad";

export class CiudadDetail extends Ciudad{
  sitios: Array<SitioTuristico> = [];
}
class SitioTuristico {
  id: number;

  tipo: String;

  nombre: String
}