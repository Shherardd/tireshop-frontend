import {create} from 'zustand'

export const useSelectorPrincipal = create(set => ({
    producto_id: 0,
    cantidad: 1,
    setProductoId: (id) => {
        set({producto_id: id});
    },
    setCantidad: (cantidad) => {
        set({cantidad: cantidad});
    },
    resetSelector: () => {
        set({cantidad: 1});
    }
}))