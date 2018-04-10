import {Producto} from "./producto";

export interface Compra {
    productos: Producto[];
    totalventa: number;
}
