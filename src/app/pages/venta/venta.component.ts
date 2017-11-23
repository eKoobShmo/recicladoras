import {Component, OnInit} from '@angular/core';
import {Producto} from "../../interfaces/producto";

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

    nombreProductoEditar: string;
    unidadProductoEditar: string;
    cantidadProductoEditar: number;
    precioProductoEditar: number;
    totlaProductoEditar: number;
    editar: boolean = false;
    indexProducto: number;


    constructor() {
    }

    ngOnInit() {
    }

    addNewProduct(){

        if(this.nombreProductoEditar != null &&
        this.unidadProductoEditar != null &&
        this.cantidadProductoEditar != null &&
        this.precioProductoEditar != null )
        {
            this.productos.push({
                nombre: this.nombreProductoEditar,
                unidad: this.unidadProductoEditar,
                cantidad: this.cantidadProductoEditar,
                precio: this.precioProductoEditar,
                total: this.precioProductoEditar * this.cantidadProductoEditar
            });

            this.nombreProductoEditar = this.unidadProductoEditar = this.cantidadProductoEditar = this.precioProductoEditar= this.totlaProductoEditar = null;
        }

    }

    editProduct(index:number){
        this.indexProducto = index;
        let producto: Producto = this.productos[index];

        this.nombreProductoEditar = producto.nombre;
        this.unidadProductoEditar = producto.unidad;
        this.cantidadProductoEditar = producto.cantidad;
        this.precioProductoEditar = producto.precio;

        this.editar= true;
    }

    finishEditProduct(){

        if(this.nombreProductoEditar != null &&
            this.unidadProductoEditar != null &&
            this.cantidadProductoEditar != null &&
            this.precioProductoEditar != null )
        {
            this.productos[this.indexProducto]={
                nombre: this.nombreProductoEditar,
                unidad: this.unidadProductoEditar,
                cantidad: this.cantidadProductoEditar,
                precio: this.precioProductoEditar,
                total: this.precioProductoEditar * this.cantidadProductoEditar
            };
            this.nombreProductoEditar = this.unidadProductoEditar = this.cantidadProductoEditar = this.precioProductoEditar= this.totlaProductoEditar = null;
            this.editar = false;
            this.indexProducto = null;
        }

    }


}
