import {create} from 'zustand'

export const useCategoriaStore = create((set, get) => ({
    categorias: [],
    isLoading: false,
    fetchCategorias: async () => {
        set({isLoading: true});
        const response = await fetch('http://localhost:3000/categorias');
        const data = await response.json();
        set({categorias: data.data});
        set({isLoading: false});
    },
    getCategoriaName: (id) => {
        const categoria = get().categorias.find(c => c.id === parseInt(id));
        return categoria ? categoria.descripcion : '';
    }
}))