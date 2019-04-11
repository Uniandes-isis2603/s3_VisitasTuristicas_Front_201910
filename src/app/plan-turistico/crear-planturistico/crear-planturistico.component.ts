import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Router} from '@angular/router';
import {FormsModule, NgForm, ReactiveFormsModule} from '@angular/forms';

import {PlanturisticoService} from '../planturistico.service';
import {PlanturisticoDetail} from '../planturistico-detail';


@Component({
  selector: 'app-crear-planturistico',
  templateUrl: './crear-planturistico.component.html',
})
export class CrearPlanTuristicoComponent implements OnInit {

  constructor(
    private planTuristicoService: PlanturisticoService,
    private router: Router
  ) {}

  planTuristicoDetail: PlanturisticoDetail;



 

  createPlanTuristico(): PlanturisticoDetail {
   

    this.planTuristicoService.createPlanTuristico(this.planTuristicoDetail)
    .subscribe((planturistico) => {
      this.planTuristicoDetail = planturistico;
    });
    return this.planTuristicoDetail;
  }

 

  ngOnInit() {
    this.planTuristicoDetail = new PlanturisticoDetail();
 
  }


}
