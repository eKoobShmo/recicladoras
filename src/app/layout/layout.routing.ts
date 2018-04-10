import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {LoginComponent} from "../pages/login/login.component";
import {HomeComponent} from "../pages/home/home.component";
import {UsuariosComponent} from '../pages/usuarios/usuarios.component';
import {PreciosComponent} from '../pages/precios/precios.component';
import {VentaComponent} from '../pages/venta/venta.component';

const LAYOUT_ROUTES: Routes = [
    {
        path: '', component: LayoutComponent, children: [
        //Home
        {path: '', redirectTo: 'ventas', pathMatch: 'full'},
        {path: 'ventas', component: VentaComponent},
        {path: 'precios', component: PreciosComponent},
        {path: 'usuarios', component: UsuariosComponent},

    ]
    }
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
