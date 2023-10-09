
import { Autocomplete, TextField } from "@mui/material";
import { useProductosStore } from "../store/producto";
import { useSelectorPrincipal } from "../store/selector-principal";
import { useEffect } from "react";
/**
 * @typedef { import('../models/producto').Producto } Producto
 */

export const AutocompleteProducts = () => {

    const fetchProductos = useProductosStore((state) => state.fetchProductos);
    /** @type {Producto[]} */
    const productos = useProductosStore((state) => state.productos);
    const setProductoId = useSelectorPrincipal((state) => state.setProductoId);

    useEffect(() => {
        fetchProductos();
    }, [fetchProductos]);

    const handleChange = (event, value) => {
        setProductoId(value.id);
    }

    return (
        <Autocomplete
        freeSolo
        id="autocomplete-productos"
        disableClearable
        fullWidth
        size="small"
        getOptionLabel={(productos) => productos.id + ' - ' + productos.descripcion}
        options={productos}
        onChange={handleChange}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Producto"
            placeholder="Buscar producto"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
    )
}