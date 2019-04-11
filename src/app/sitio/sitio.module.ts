import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { FormsModule } from '@angular/forms';

import { SitioService } from './sitio.service';
import { ListarSitioComponent} from './listar-sitio/listar-sitio.component';
import { CrearSitioComponent } from './crear-sitio/crear-sitio.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule
  ],
  declarations: [ListarSitioComponent, CrearSitioComponent],
  providers: [SitioService],
  exports: [ListarSitioComponent],
})
export class SitioModule { }
