import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {isUndefined} from 'util';

@Component({
    selector: 'app-venta',
    templateUrl: './venta.component.html',
    styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit {

    editableProduct: any ={
        nombre: null,
        unidad: 'Kg',
        cantidad: null,
        precio: null
    };
    editar = false;
    indexProducto: string;
    total: number = 0;
    items: any[] = [];
    esVenta: boolean = false;

    constructor( private db: AngularFireDatabase) {
        this.db.list('productos')
            .subscribe((response:any[])=>{
                this.items = response;
                this.calculateTotal();
            })
    }

    ngOnInit() {
    }

    calculateTotal() {
        this.total = null;
        if (this.items.length != 0) {
            for (let producto of this.items) {
                this.total += producto.total;
            }
        }
        else {
            this.total = 0;
        }
    }


    isProductFormEmpty(): boolean {
        return !(!isUndefined(this.editableProduct.nombre) &&
            !isUndefined(this.editableProduct.unidad) &&
            !isUndefined(this.editableProduct.cantidad) &&
            !isUndefined(this.editableProduct.precio));
    }

    calculateTotalProduct() {
        this.editableProduct.total = this.editableProduct.cantidad * this.editableProduct.precio;
    }

    resetEditableProduct() {
        this.editableProduct = {
            nombre: null,
            unidad: 'Kg',
            cantidad: null,
            precio: null
        };
    }

    addNewProduct() {
        if (!this.isProductFormEmpty()) {
            debugger
            this.calculateTotalProduct();
            let key = this.db.list("productos").push(this.editableProduct).key
            this.db.list("productos").update(key,{key:key})
            this.resetEditableProduct();
            this.calculateTotal();
        }
    }

    sendProductToEdit(key: string) {
        this.esVenta = false;
        this.db.object("productos/"+key)
            .subscribe((response:any)=>{
                this.editableProduct =response;
                if(!this.esVenta) this.editar = true;
            })
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

    deleteProducto(key: string) {
        this.db.list('productos').remove(key);
        this.resetEditableProduct()
        this.editar = false;
        this.calculateTotal();
    }

    finishSell() {
        this.editar = false;
        this.esVenta = true;
        if (this.items != null) {
            this.db.list('ventas').push({
                productos: this.items,
                total: this.total
            });
            this.db.list('productos').remove();
            this.resetEditableProduct();
            this.items = [];
            this.calculateTotal();
        }

    }
}
