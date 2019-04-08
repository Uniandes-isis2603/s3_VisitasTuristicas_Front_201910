import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarViajeroComponent } from './listar-viajero/listar-viajero.component';
import { ViajeroDetailComponent } from './viajero-detail/viajero-detail.component';

@NgModule({
  declarations: [ListarViajeroComponent, ViajeroDetailComponent],
  imports: [
    CommonModule
  ]
})
export class ViajeroModule { }
