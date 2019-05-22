import {Planturistico} from './planTuristico'
export class PlanturisticoDetail extends Planturistico{
  blogsDeViajero: Array<BlogDeViajero>= [];
  valoraciones: Array<valoracion>= [];
}

class BlogDeViajero{
  id: Number;
  comentarios: String;
  sugerencias: String;
  likes: Number
}

export class valoracion{
  id: Number;
  comentario: string;
  valoracion: number;
}