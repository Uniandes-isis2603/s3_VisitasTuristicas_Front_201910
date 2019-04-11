import {Planturistico} from './planTuristico'
export class PlanturisticoDetail extends Planturistico{
  blogsDeViajero: Array<BlogDeViajero>= [];

}

export class BlogDeViajero{
  id: Number;
  comentarios: String;
  sugerencias: String;
  likes: Number
}