import {
  Box,
  Stack,
  Button,
  TextField,
  Typography,
  Table,
  TableBody,
  TableHead, TableRow, TableCell
} from "@mui/material";
import { AutocompleteProducts } from "./autocomplete-productos";
import { useSelectorPrincipal } from "../store/selector-principal";
import { useCajaStore } from "../store/caja";
import { useProductosStore } from "../store/producto";


export const VentaProductosComponent = () => {

  const producto_id = useSelectorPrincipal((state) => state.producto_id);
  const cantidad = useSelectorPrincipal((state) => state.cantidad);
  const setCantidad = useSelectorPrincipal((state) => state.setCantidad);
  const resetSelector = useSelectorPrincipal((state) => state.resetSelector);

  const productos = useProductosStore((state) => state.productos);

  const agregarProducto = useCajaStore((state) => state.agregarProducto);
  const quitarProducto = useCajaStore((state) => state.quitarProducto);
  const ventaProducto = useCajaStore((state) => state.ventaProducto);

  const actualizarResumen = useCajaStore((state) => state.actualizarResumen);

  const handleAddProduct = () => {
    const producto = productos.find(p => p.id === producto_id);
    if(!producto){
      return;
    }
    agregarProducto(producto, cantidad);
    actualizarResumen();
    resetSelector();
  }

  const handleChangeCantidad = (e) => {
    setCantidad(e.target.value)
  }

  const quitarProductoVenta = (id) => () => {
    quitarProducto(id);
    actualizarResumen();
  }


  return (
    <Box padding={3}>
      <Box component="div" noValidate>
        <Stack direction="row" gap={1}>
          <AutocompleteProducts />
          <TextField
            size="small"
            variant="outlined"
            placeholder="1"
            label="Cantidad"
            value={cantidad}
            onChange={handleChangeCantidad}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{
              textTransform: "capitalize",
            }}
            onClick={handleAddProduct}
          >
            Agregar
          </Button>
        </Stack>
      </Box>
      <Box marginTop={2}>
        <Stack>
          <Typography variant="h5">Productos</Typography>
          <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Descripcion</TableCell>
                    <TableCell>Cantidad</TableCell>
                    <TableCell>Precio U.</TableCell>
                    <TableCell>Subtotal</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
              {ventaProducto.length === 0 
              ? <TableRow>
                  <TableCell colSpan={6} align="center">
                    Caja vacía...
                    </TableCell>
              </TableRow>
              : ventaProducto.map((p) => (
                <TableRow key={p.id}>
                  <TableCell>{p.id}</TableCell>
                  <TableCell>{p.descripcion}</TableCell>
                  <TableCell>{p.cantidad}</TableCell>
                  <TableCell>{p.precio_unitario}</TableCell>
                  <TableCell>{p.subtotal}</TableCell>
                  <TableCell>
                    <Button 
                    color="error" 
                    size="small"
                    onClick={quitarProductoVenta(p.id)}
                    >
                      Eliminar
                    </Button>
                  </TableCell>
                </TableRow>))}
            </TableBody>
          </Table>
        </Stack>
      </Box>
    </Box>
  );
};
