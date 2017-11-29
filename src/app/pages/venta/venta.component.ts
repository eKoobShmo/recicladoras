import {Component, OnInit} from '@angular/core';
import {Producto} from "../../interfaces/producto";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {Compra} from "../../interfaces/compra";

@Component({
    selector: 'app-venta',
    templateUrl: './venta.component.html',
    styleUrls: ['./venta.component.scss']
})
export class VentaComponent implements OnInit {

    productos: Producto[] = [
        {
            nombre:"Roca Lunar",
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

    ];

    compra: FirebaseListObservable<any>;

    editableProduct: Producto;
    editar: boolean = false;
    indexProducto: number;

    total: number = 0;


    constructor(private db: AngularFireDatabase) {
    }

    ngOnInit() {
        this.compra = this.db.list('Compras');
    }

    calculateTotal(){
        this.total = null;
        for(let producto of this.productos){
            this.total += producto.total;
        }
    }

    addNewProduct(){

        if(this.editableProduct != null)
        {
            this.productos.push({
                nombre: this.editableProduct.nombre,
                unidad: this.editableProduct.unidad,
                cantidad: this.editableProduct.cantidad,
                precio: this.editableProduct.precio,
                total: this.editableProduct.precio * this.editableProduct.cantidad
            });

            this.editableProduct = null;
            this.calculateTotal();
        }

    }

    editProduct(index:number){
        this.indexProducto = index;
        this.editableProduct = this.productos[index];
        this.editar= true;
    }

    finishEditProduct(){

        if(this.editableProduct != null)
        {
            this.productos[this.indexProducto]={
                nombre: this.editableProduct.nombre,
                unidad: this.editableProduct.unidad,
                cantidad: this.editableProduct.cantidad,
                precio: this.editableProduct.precio,
                total: this.editableProduct.precio * this.editableProduct.cantidad
            };
            this.editableProduct = null;
            this.editar = false;
            this.indexProducto = null;
            this.calculateTotal();
        }

    }

    deleteProducto(index: number){
        this.productos.splice(index, 1);
        this.calculateTotal();
    }

    finishSell(){
        if(this.productos != null){
            this.compra.push({
                productos: this.productos,
                total: this.total
            })

            this.productos = null;
            this.total = 0;
        }

    }
}
