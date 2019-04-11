import { Component, OnInit } from '@angular/core';
import { PlanturisticoService } from '../planturistico.service';
import { Router } from '@angular/router';

import { Planturistico } from '../planTuristico';
import { PlanturisticoDetail } from '../planturistico-detail';

import { PlanTuristicoDetailComponent } from '../planturistico-detail/planturistico-detail.component';


@Component({
  selector: 'listar-planturistico',
  templateUrl: './listar-planturistico.component.html',

})
export class ListarPlanturisticoComponent implements OnInit {

  constructor(private planTuristicoService: PlanturisticoService, private router: Router) { }
  crearPlanTuristico: boolean;
  planTuristico_id: number;
  selectedPlanTuristico: PlanturisticoDetail;
  planTuristico: Planturistico[];

  getPlanesTuristicos(): void {
    this.planTuristicoService.getPlanesTuristicos().subscribe
    (cliente => this.planTuristico= cliente);
  }
  
  onSelected(editorial_id: number): void {
    console.log(this.planTuristico);
    this.planTuristico_id = editorial_id;
    console.log("lol");
    this.selectedPlanTuristico = new PlanturisticoDetail();
    this.planTuristicoService. getPlanTuristicoDetail(editorial_id).subscribe(o => {this.selectedPlanTuristico = o;
    console.log("loler");
    console.log(o);
    console.log("lolest");
    console.log(this.selectedPlanTuristico)}
    );
  }

  cambiarBoolean(): void{
    this.crearPlanTuristico = !this.crearPlanTuristico;
  }
  ngOnInit() {
    this.getPlanesTuristicos();
  }

}
