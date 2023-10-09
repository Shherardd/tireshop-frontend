import {create} from 'zustand'

/**
 * @typedef { import('../models/producto').Producto } Producto
 */

/**
 * @typedef {Object} ProductosStoreState
 * @property {Producto[]} productos - Un array de productos.
 * @property {boolean} isLoading - Indica si se están cargando los productos.
 * @property {() => Promise<void>} fetchProductos - Una función para cargar los productos.
 * @property {(categoria: number) => Producto[]} getProductosByCategoria - Una función para obtener los productos de una categoría.
 */

/**
 * @param {(state: ProductosStoreState) => void} set - La función para actualizar el estado.
 * @returns {ProductosStoreState} El estado del almacén de productos.
 */
export const useProductosStore = create(set => ({
    productos: [],
    isLoading: false,
    productosByCategoria: [],
    fetchProductos: async () => {
        set({isLoading: true});
        const response = await fetch('http://localhost:3000/productos');
        const data = await response.json();
        set({productos: data.data});
        set({isLoading: false});
    },
    getProductosByCategoria: (categoria) => {
        set({productosByCategoria: []});
        const productos = useProductosStore.getState().productos;
        const productosByCategoria = productos.filter(p => p.categoria_id === parseInt(categoria));
        set({productosByCategoria: productosByCategoria});
    },
    getLastTenProductosOrderByIdDesc: () => {
        const productos = useProductosStore.getState().productos;
        const lastTenProductos = productos.sort((a, b) => b.id - a.id).slice(0, 10);
        return lastTenProductos;
    }
}))