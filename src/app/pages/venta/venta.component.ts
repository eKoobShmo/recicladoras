import {Component, OnInit} from '@angular/core';
import {Producto} from "../../interfaces/producto";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Compra} from "../../interfaces/compra";
import {isUndefined} from 'util';
import {Observable} from 'rxjs/Observable';

@Component({
    selector: 'app-venta',
    templateUrl: './venta.component.html',
    styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit {

    productos: Producto[] = [
        {
            nombre: "Roca Lunar",
            unidad: "Kg",
            precio: 25,
            cantidad: 2,
            total: 50,
        },
        {
            nombre: "Puerta Fierro",
            unidad: "Unidad",
            precio: 25,
            cantidad: 2,
            total: 50,
        },
        {
            nombre: "Puerta Fierro",
            unidad: "Unidad",
            precio: 25,
            cantidad: 2,
            total: 50,
        },
        {
            nombre: "Puerta Fierro",
            unidad: "Unidad",
            precio: 25,
            cantidad: 2,
            total: 50,
        },
        {
            nombre: "Puerta Fierro",
            unidad: 'Unidad',
            precio: 25,
            cantidad: 2,
            total: 50,
        },
        {
            nombre: "Puerta Fierro",
            unidad: "Unidad",
            precio: 25,
            cantidad: 2,
            total: 50,
        },
        {
            nombre: "Puerta Fierro",
            unidad: "Unidad",
            precio: 25,
            cantidad: 2,
            total: 50,
        },

    ];

    compra: FirebaseListObservable<any>;
    editableProduct: any;
    editar = false;
    indexProducto: string;

    total: number;


    items: Observable<any[]>;
    constructor( private db: AngularFireDatabase) {

    }




    ngOnInit() {
        this.compra = this.db.list('Compras');
        this.total = 0;
        this.calculateTotal();
        this.items = this.db.list('productos')
    }

    calculateTotal() {
        this.total = null;
        if (this.productos.length != 0) {
            for (let producto of this.productos) {
                this.total += producto.total;
            }
        }
        else {
            this.total = 0;
        }
    }


    isProductFormEmpty(): boolean {
        if (
            !isUndefined(this.editableProduct.nombre) &&
            !isUndefined(this.editableProduct.unidad) &&
            !isUndefined(this.editableProduct.cantidad) &&
            !isUndefined(this.editableProduct.precio)
        ) {
            debugger
            return false;
        } else {
            debugger
            return true;
        }
    }


    calculateTotalProduct() {
        this.editableProduct.total = this.editableProduct.cantidad * this.editableProduct.precio;
    }

    resetEditableProduct() {
        this.editableProduct = {} as Producto;
    }

    addNewProduct() {

        if (!this.isProductFormEmpty()) {
            this.calculateTotalProduct();
            let key = this.db.list("productos").push(this.editableProduct).key
            this.db.list("productos").update(key,{key:key})
            this.productos.push(this.editableProduct);
            this.resetEditableProduct();
            this.calculateTotal();
        }

    }

    sendProductToEdit(index: string) {
        this.indexProducto = index;
        this.db.object("productos/"+index)
            
        this.editableProduct =  this.db.object("productos/"+index)
        this.editar = true;
    }

    finishEditProduct() {

        if (!this.isProductFormEmpty()) {
            this.calculateTotalProduct();
            this.db.list("productos").update(this.editableProduct.key,this.editableProduct)
            this.resetEditableProduct();
            this.editar = false;
            this.indexProducto = null;
            this.calculateTotal();
        }

    }

    deleteProducto(index: number) {
        this.productos.splice(index, 1);
        this.calculateTotal();
    }

    finishSell() {
        if (this.productos != null) {
            this.compra.push({
                productos: this.productos,
                total: this.total
            })

            this.resetEditableProduct();
            this.calculateTotal();
        }

    }
}
