import {Routes, RouterModule} from '@angular/router';
import {LayoutComponent} from './layout.component';
import {LoginComponent} from "../pages/login/login.component";
import {HomeComponent} from "../pages/home/home.component";
import {ComprasComponent} from '../pages/compras/compras.component';

const LAYOUT_ROUTES: Routes = [
    {
        path: '', component: LayoutComponent, children: [
        //Home
        {path: '', redirectTo: 'principal', pathMatch: 'full'},
        {path: 'principal', component: ComprasComponent},

    ]
    }
];

export const LayoutRouting = RouterModule.forChild(LAYOUT_ROUTES);
