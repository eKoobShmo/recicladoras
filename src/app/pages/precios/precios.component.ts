import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Producto} from "../../interfaces/producto";

@Component({
    selector: 'app-precios',
    templateUrl: './precios.component.html',
    styleUrls: ['./precios.component.scss']
})
export class PreciosComponent implements OnInit {

    productos: Producto[];
    productosTemporal: Producto[];
    busqueda: string;

    constructor(private db: AngularFireDatabase) {
    }

    ngOnInit() {
        this.db.list('Productos').subscribe(result => {
            this.productos =  this.productosTemporal = result;
        });
    }

    searchProduct(terminoBusqueda: string) {
        if (!this.productos) {
            this.productosTemporal = []
        } else {
            this.productosTemporal = this.productos.filter(it => it.producto.toLowerCase().indexOf(terminoBusqueda.toLowerCase()) >= 0);
        }
    }


}
