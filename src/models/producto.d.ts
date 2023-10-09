export type Producto = {
    id: number;
    descripcion: string;
    medida: string;
    marca: string;
    categoria_id: number;
    existencia: number;
    precio_unitario: number;
    precio_descuento: number;
}

export type CreateProductoFormValues = {
    categoria_id: number;
    descripcion: string;
    medida: string;
    rin: number;
    marca: string;
    existencia: number;
    precio_unitario: number;
    precio_descuento: number;
}