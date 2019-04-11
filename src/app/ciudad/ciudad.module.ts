import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { CiudadListComponent } from './ciudad-list/ciudad-list.component';

import { CiudadService } from './ciudad.service';
import { FormsModule } from '@angular/forms';
import { CiudadDetailComponent } from './ciudad-detail/ciudad-detail.component';
import { CiudadCreateComponent } from './ciudad-create/ciudad-create.component';
import { CiudadEditComponent } from './ciudad-edit/ciudad-edit.component';


@NgModule({
    imports: [       
        CommonModule,
        FormsModule,
        AppRoutingModule
    ],
    declarations: [CiudadListComponent, CiudadDetailComponent, CiudadCreateComponent, CiudadEditComponent],
    providers: [CiudadService],
    exports:[CiudadListComponent]
})
export class CiudadModule {}

