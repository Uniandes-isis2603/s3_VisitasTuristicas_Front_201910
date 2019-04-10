import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListarInicioComponent } from './listar-inicio/listar-inicio.component';

import {AppRoutingModule} from '../app-routing/app-routing.module';

@NgModule({
  imports: [
    CommonModule, AppRoutingModule
  ],
  declarations: [ListarInicioComponent]
})
export class InicioModule { }
