import {Injectable} from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';
import * as _ from "lodash";

@Injectable()
export class UserService {

    constructor(private bd: AngularFireDatabase) {
    }

    getUserType(){
        return new Promise((resolve,reject) =>{
            this.bd.list('usuarios')
                .subscribe(usuarios=>{
                    let usuario:any = _.filter(usuarios, ['email', localStorage.getItem('email')])
                    if (usuario[0]){
                        resolve(usuario[0].tipo)
                    }else {
                        reject()
                    }
                })
        })
    }
}
