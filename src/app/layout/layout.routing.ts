import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {LoginComponent} from "../pages/login/login.component";
import {HomeComponent} from "../pages/home/home.component";
import {RegistroClienteComponent} from "../pages/registro-cliente/registro-cliente.component"

const LAYOUT_ROUTES: Routes = [
    {
        path: '', component: LayoutComponent, children: [
        //Home
        {path: '', redirectTo: 'principal', pathMatch: 'full'},
        {path: 'principal', component: HomeComponent},
        {path: 'registro', component: RegistroClienteComponent}

    ]
    }
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
