
export interface Producto {
    nombre: string;
    unidad: string;
    precio: number;
    cantidad: number;
    total: number;
}
export interface Precio {
    producto: string;
    precio: number;
}
