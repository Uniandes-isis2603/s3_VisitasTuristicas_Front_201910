import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {AuthModule} from './auth/auth.module';
import { InicioModule } from './inicio/inicio.module';
import { ViajeroModule } from './viajero/viajero.module';
import { PlanturisticoModule } from './plan-turistico/plan-turistico.module';
import {SitioModule} from './sitio/sitio.module';
import {CiudadModule} from './ciudad/ciudad.module';

// import { Guard } from './_services/guard.service';
// import { ViajeroComponent } from './viajero/viajero.component';
// import { AdministradorComponent } from './administrador/administrador.component';




@NgModule({
    declarations: [
        AppComponent
//     , ViajeroComponent,
//     AdministradorComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        AuthModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 1000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,

        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule,
        InicioModule,
        ViajeroModule,
        PlanturisticoModule,
        SitioModule,
        CiudadModule
    ],
                //     RouterModule.forRoot([
//         {
//           path: 'viajero',
//           component: ViajeroComponent,
//           canActivate:[Guard]
//         },
//         {
//         path: 'administrador',
//         component: AdministradorComponent,
//         canActivate:[Guard]
//        }
//     ])
//   ],
//   providers: [Guard],
//   bootstrap: [AppComponent]

    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        }
    ]
})
export class AppModule {}

// import { Guard } from './_services/guard.service';
// import { ViajeroComponent } from './viajero/viajero.component';
// import { AdministradorComponent } from './administrador/administrador.component';
// @NgModule({
//   declarations: [
//     AppComponent,
//     ViajeroComponent,
//     AdministradorComponent
//   ],
//   imports: [
//     BrowserModule,
//     HttpModule,

//     RouterModule.forRoot([
//         {
//           path: 'viajero',
//           component: ViajeroComponent,
//           canActivate:[Guard]
//         },
//         {
//         path: 'administrador',
//         component: AdministradorComponent,
//         canActivate:[Guard]
//        }
//     ])
//   ],
//   providers: [Guard],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }