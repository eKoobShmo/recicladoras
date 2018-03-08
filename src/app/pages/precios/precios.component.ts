import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Precio} from "../../interfaces/precio";
import {Observable} from "rxjs/Observable";

@Component({
    selector: 'app-precios',
    templateUrl: './precios.component.html',
    styleUrls: ['./precios.component.scss']
})
export class PreciosComponent implements OnInit {

    productos: Precio[];
    productosTemporal: Precio[];
    productosFireBase: FirebaseListObservable<Precio[]>;
    busqueda: string;

    nombreProductoEditar: string;
    precioProductoEditar: number;
    keyProductoEditar: string;

    constructor(private db: AngularFireDatabase) {
    }

    ngOnInit() {
        this.productosFireBase =  this.db.list('ProductosAlmacen');
        this.productosFireBase
            .subscribe(result => {
            this.productos =  this.productosTemporal = result;
        });
    }

    addProducts(){
        if(this.nombreProductoEditar != null && this.precioProductoEditar != null){
            this.productosFireBase.push({
                producto: this.nombreProductoEditar,
                precio: this.precioProductoEditar,
            });

            this.nombreProductoEditar = this.precioProductoEditar = null;
        }
    }
    
    sendProductToEdit(keyProducto: string,producto:string,precio:number){
        this.nombreProductoEditar = producto;
        this.precioProductoEditar = precio;
        this.keyProductoEditar = keyProducto;
    }

    finishProductEdit(){
        if(this.precioProductoEditar != null && this.nombreProductoEditar != null){
            this.productosFireBase.update(this.keyProductoEditar,{
                producto: this.nombreProductoEditar,
                precio: this.precioProductoEditar,
            });
            this.nombreProductoEditar = this.precioProductoEditar = this.keyProductoEditar = null;
        }


    }

    searchProduct(terminoBusqueda: string) {
        if (!this.productos) {
            this.productosTemporal = []
        } else {
            this.productosTemporal = this.productos.filter(it => it.producto.toLowerCase().indexOf(terminoBusqueda.toLowerCase()) >= 0);
        }
    }

    deleteProducto(key: string){
        this.productosFireBase.remove(key)
    }
}
