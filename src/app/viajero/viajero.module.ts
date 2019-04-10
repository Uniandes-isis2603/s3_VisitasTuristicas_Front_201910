import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

import { ViajeroService } from './viajero.service';
import { ListarViajeroComponent} from './listar-viajero/listar-viajero.component';
import { ViajeroDetailComponent } from './viajero-detail/viajero-detail.component';
import { CrearViajeroComponent } from './crear-viajero/crear-viajero.component';
import { CrearFacturaComponent } from './crear-factura/crear-factura.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ListarViajeroComponent, ViajeroDetailComponent, CrearViajeroComponent, CrearFacturaComponent],
  providers: [ViajeroService],
  exports: [ListarViajeroComponent],
})
export class ViajeroModule { }
