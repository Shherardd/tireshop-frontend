import {create} from 'zustand'

export const useClienteStore = create(set => ({
    clientes: [],
    isLoading: false,
    fetchClientes: async () => {
        set({isLoading: true});
        const response = await fetch('http://localhost:3000/clientes');
        const data = await response.json();
        set({clientes: data.data});
        set({isLoading: false});
    }
}))