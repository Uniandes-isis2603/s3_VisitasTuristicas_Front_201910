import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarInicioComponent } from './listar-inicio/listar-inicio.component';

import {AppRoutingModule} from '../app-routing/app-routing.module';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [ListarInicioComponent, PaginaInicioComponent]
})
export class InicioModule { }
