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
}
