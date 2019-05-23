export class Viajero {

  /** El id del viajero en cuestion **/
    idUsuario: Number;

  /** El nombre de usuario del viajero **/
    nombreUsuario: String;

  /** El idioma en que se desplegará la información **/
    idioma: String;

  /** Tipo de usuario del viajero, administrador o cliente**/
    tipoDeUsuario: String;

  /** Información personal del viajero **/
    informacionPersonal: String;

    preferencias: Array<Preferencias>;
}

class Preferencias{
  nombrePreferencia: string;
} 

