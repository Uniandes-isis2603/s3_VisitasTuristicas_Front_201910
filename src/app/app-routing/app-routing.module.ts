import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {NgxPermissionsGuard} from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
import { ListarInicioComponent } from 'app/inicio/listar-inicio/listar-inicio.component';
import { PaginaInicioComponent } from 'app/inicio/pagina-inicio/pagina-inicio.component';
import { ListarViajeroComponent } from 'app/viajero/listar-viajero/listar-viajero.component';
import { ListarPlanturisticoComponent } from 'app/plan-turistico/listar-planturistico/listar-planturistico.component';
import { ListarSitioComponent } from 'app/sitio/listar-sitio/listar-sitio.component';
import { CiudadListComponent } from 'app/ciudad/ciudad-list/ciudad-list.component';

const routes: Routes = [

     {
        path: 'auth',

        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: ':sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: '',
        component: ListarPlanturisticoComponent,
    },
    {
        path: 'listar-cliente',
        component: ListarViajeroComponent,
    },
    {
        path: 'listar-plan',
        component: ListarPlanturisticoComponent,
    },
    {
        path: 'listar-sitio',
        component: ListarSitioComponent,
    },
    {
        path: 'listar-ciudad',
        component: CiudadListComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload'})
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
