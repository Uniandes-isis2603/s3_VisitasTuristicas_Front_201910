import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanturisticoService } from './planturistico.service';
import { ListarPlanturisticoComponent } from './listar-planturistico/listar-planturistico.component';
import { PlanTuristicoDetailComponent } from './planturistico-detail/planturistico-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';
import { CrearPlanTuristicoComponent } from './crear-planturistico/crear-planturistico.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule

  ],
  declarations: [ListarPlanturisticoComponent, PlanTuristicoDetailComponent, CrearPlanTuristicoComponent],
  providers: [PlanturisticoService],
  exports: [ListarPlanturisticoComponent],
})
export class PlanturisticoModule { }
