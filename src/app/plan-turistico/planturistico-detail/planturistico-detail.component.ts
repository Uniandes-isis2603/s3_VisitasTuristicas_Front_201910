import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { PlanturisticoService } from '../planturistico.service';
import { Planturistico } from '../planTuristico';
import { PlanturisticoDetail } from '../planturistico-detail';

import { ListarValoracionComponent } from '../listar-valoracion/listar-valoracion.component';
@Component({
  selector: 'app-plan-turistico-detail',
  templateUrl: './planturistico-detail.component.html',
 
})
export class PlanTuristicoDetailComponent implements OnInit {

  constructor(
     private planTuristicoService: PlanturisticoService,
    private route: ActivatedRoute
  ) { }

   /**
  * Plan Turistico whose details we want to show
  */
  @Input() planTuristicoDetail: PlanturisticoDetail;

  /**
  * The plan turistico's id retrieved from the address
  */
  planTuristico_id: number;

  loader: any;

  /**
  * The method which retrieves the books of an editorial
  */
  getPlanTuristicoDetail(): void {

    this.planTuristicoService.getPlanTuristicoDetail(this.planTuristico_id).subscribe(o => {
        this.planTuristicoDetail = o
      });
  }


  ngOnInit() {
    this.planTuristico_id = 
    +this.route.snapshot.paramMap.get('id');
    if (this.planTuristico_id) {
      this.planTuristicoDetail = new PlanturisticoDetail();
      this.getPlanTuristicoDetail();
    }
  }

}