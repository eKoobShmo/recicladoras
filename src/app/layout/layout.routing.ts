import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {LoginComponent} from "../pages/login/login.component";
import {HomeComponent} from "../pages/home/home.component";
import {UsuariosComponent} from '../pages/usuarios/usuarios.component';
import {PreciosComponent} from '../pages/precios/precios.component';

const LAYOUT_ROUTES: Routes = [
    {
        path: '', component: LayoutComponent, children: [
        //Home
        {path: '', redirectTo: 'principal', pathMatch: 'full'},
        {path: 'principal', component: PreciosComponent},

    ]
    }
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
