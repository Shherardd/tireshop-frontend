import { PageHeaderComponent } from "../components/page-header";
import { useForm } from "react-hook-form";
import { Button, TextField, Stack, Box, MenuItem } from "@mui/material";
import { useProductosStore } from "../store/producto";
import { useCategoriaStore } from "../store/categoria";
import { useEffect, useState } from "react";

/**
 * @typedef { import('../models/producto').CreateProductoFormValues } CreateProductoFormValues
 */

export const AgregarProductosComponent = () => {
  const categorias = useCategoriaStore((state) => state.categorias);
  const getLastProducts = useProductosStore(
    (state) => state.getLastTenProductosOrderByIdDesc
  );
  const fetchProductos = useProductosStore((state) => state.fetchProductos);

  const [lastProducts, setLastProducts] = useState(getLastProducts())

  /** @type {useForm<CreateProductoFormValues>} */
  const form = useForm({
    defaultValues: {
      categoria_id: 1,
      descripcion: null,
      medida: null,
      rin: null,
      marca: null,
      existencia: null,
      precio_unitario: null,
      precio_descuento: null,
    },
  });

  const { handleSubmit, watch, setValue } = form;

  const watchMedida = watch("medida");
  const watchRin = watch("rin");
  const watchMarca = watch("marca");

  const onSubmit = async (data) => {
    const apiUrl = 'http://localhost:3000/productos';

    data.precio_unitario = parseFloat(data.precio_unitario)
    data.precio_descuento = parseFloat(data.precio_descuento)
    data.rin = parseFloat(data.rin)
    data.existencia = parseFloat(data.existencia)

  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
  
    try {
      const response = await fetch(apiUrl, requestOptions);
  
      if (!response.ok) {
        throw new Error(`Error de red: ${response.status}`);
      }
  
      const responseData = await response.json();
      await fetchProductos()
      setLastProducts(getLastProducts())
      console.log('Respuesta exitosa:', responseData);
      
  
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  };

  useEffect(() => {
      const descripcion = `${watchMedida ?? ''} R${watchRin ?? ''} ${watchMarca ?? ''}`;
      setValue("descripcion", descripcion);
  }, [watchMedida, watchRin, watchMarca, setValue]);

  useEffect(() => {
    fetchProductos()
  })

 

  return (
    <>
      <PageHeaderComponent titulo="Agregar Productos" />
      <Box display="flex" gap={2}>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <Stack spacing={2} width={400}>
            <TextField
              label="Categoría"
              variant="outlined"
              fullWidth
              select
              defaultValue={1}
              {...form.register("categoria_id")}
            >
              {categorias.map((cat) => (
                <MenuItem key={cat.id} value={cat.id}>
                  {cat.descripcion}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Rin"
              variant="outlined"
              fullWidth
              {...form.register("rin")}
            />
            <TextField
              label="Medida"
              variant="outlined"
              fullWidth
              {...form.register("medida")}
            />
            <TextField
              label="Marca"
              variant="outlined"
              fullWidth
              {...form.register("marca")}
            />
            <TextField
              label="Descripción"
              variant="outlined"
              fullWidth
              {...form.register("descripcion")}
            />
            <TextField
              label="Existencia"
              variant="outlined"
              fullWidth
              {...form.register("existencia")}
            />
            <TextField
              label="Precio Unitario"
              variant="outlined"
              fullWidth
              type="number"
              {...form.register("precio_unitario")}
            />
            <TextField
              label="Precio Descuento"
              variant="outlined"
              fullWidth
              type="number"
              {...form.register("precio_descuento")}
            />
            <Button variant="contained" color="primary" fullWidth type="submit">
              Guardar
            </Button>
          </Stack>
        </form>
        <div>
          <ul>
            {lastProducts.length > 0 && <p>Últimos productos agregados</p>}
            {lastProducts.length > 0 &&
              lastProducts.map((p) => <li key={p.id}>{p.descripcion}</li>)}
          </ul>
        </div>
      </Box>
    </>
  );
};
