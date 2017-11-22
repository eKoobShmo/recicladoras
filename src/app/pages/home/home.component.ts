import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Cliente} from "../../interfaces/cliente";
import {Router} from "@angular/router";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    clientes: Cliente[];
    clientesTemporal: Cliente[];
    clientesAlgo: Observable<Cliente[]>;
    busqueda: string;



    constructor(private db: AngularFireDatabase,
                private router: Router) {
    }


    ngOnInit() {
        this.clientesAlgo = this.db.list('Clientes');
        this.clientesAlgo.subscribe(result =>{
            this.clientes = this.clientesTemporal =  result;
            console.log(this.clientes);

        });



    }

    sendToClient(key: string) {
        this.router.navigate(['/cliente', key])
    }

    sendToNewClient(){
        this.router.navigate(['/nuevoCliente'])
    }

    searchClient(terminoBusqueda:string){
        if (!this.clientes) {
            this.clientesTemporal = []
        }else {
            this.clientesTemporal = this.clientes.filter(it => it.nombre.toLowerCase().indexOf(terminoBusqueda.toLowerCase()) >= 0);
        }
    }

}

