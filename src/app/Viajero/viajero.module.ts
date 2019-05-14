import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';

import {ViajeroListComponent} from './viajero-list/viajero-list.component';
import {ViajeroService} from './viajero.service';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {ViajeroDetailComponent} from './viajero-detail/viajero-detail.component';
import {ViajeroCreateComponent} from './viajero-create/viajero-create.component';
import {ViajeroEditComponent} from './viajero-edit/viajero-edit.component';
import {BookModule} from '../book/book.module'; aksjsja

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        NgxPermissionsModule,
        CommonModule,
        FormsModule,
        BookModule
    ],
    declarations: [ViajeroListComponent, ViajeroDetailComponent, ViajeroCreateComponent, ViajeroEditComponent],
    providers: [ViajeroService]
})
export class ViajeroModule {}