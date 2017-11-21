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

    sendToClient(key: string) {
        this.router.navigate(['/cliente', key])
    }

    sendToNewClient(){
        this.router.navigate(['/nuevoCliente'])
    }

}

