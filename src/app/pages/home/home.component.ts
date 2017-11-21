import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Cliente} from "../../interfaces/cliente";
import {Router} from "@angular/router";

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    clientes: FirebaseListObservable<Cliente[]>;


    constructor(private db: AngularFireDatabase,
                private router: Router) {
    }


    ngOnInit() {
        this.clientes = this.db.list('Clientes')



    }

    verCliente(key: string) {
        this.router.navigate(['/cliente', key])
    }

    agregarCliente(){
        this.clientes.push({
            nombre: "Pancho",
            apellidoPaterno: "Alcaraz",
            apellidoMaterno: "Perez",
            rfc: "fdsafasd",
            mesComprobante: "Enero",
            identificacionUrl: "asdfasdf",
            comprobanteDomicilioUrl: "dasfsdf",
            huellaIzquierdaUrl: "asdfas",
            huellaDerechaUrl: "adfssd",
            fotoUrl: "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png"
        })
  }

}

