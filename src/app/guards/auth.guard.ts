import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {UserService} from '../services/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private _userService: UserService) {

    }

    canActivate(next: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        return new Promise(resolve => {
            this._userService.getUserType()
                .then((tipoUsuario: string) => {

                if (state.url == '/precios' && tipoUsuario == 'admin') {
                    resolve(true);
                } else if (state.url == '/usuarios' && tipoUsuario == 'admin') {
                    resolve(true);
                } else if (state.url == '/ventas') {
                    resolve(true);
                } else {
                    window.location.href = '/ventas';
                    resolve(false);
                }
            }).catch(error=>window.location.href = '/#/login')
        })

    }
}
