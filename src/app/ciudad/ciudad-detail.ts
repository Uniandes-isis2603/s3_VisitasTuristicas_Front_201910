import {Ciudad} from "./ciudad";

export class CiudadDetail extends Ciudad{
  sitios: Array<SitioTuristico> = [];

  description: string;
  
  imagen: ImageData;
}
class SitioTuristico {
  tipo: String;

  nombre: String
}