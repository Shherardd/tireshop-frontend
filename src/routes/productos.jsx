import { Box } from "@mui/material";
import { PageHeaderComponent } from "../components/page-header";
import { useCategoriaStore } from "../store/categoria";
import { useProductosStore } from "../store/producto";
import { useEffect } from "react";
import { CategoryCardComponent } from "../components/category-card";

export const Productos = () => {
  const fetchCategorias = useCategoriaStore((state) => state.fetchCategorias);
  const categorias = useCategoriaStore((state) => state.categorias);
  const isLoading = useCategoriaStore((state) => state.isLoading);

  const fetchProductos = useProductosStore((state) => state.fetchProductos);
  const productos = useProductosStore((state) => state.productos);

  useEffect(() => {
    fetchCategorias();
    if (productos.length === 0) {
      fetchProductos();
    }
  }, [fetchCategorias, fetchProductos, productos.length]);

  return (
    <Box>
      <PageHeaderComponent titulo="Productos" />
      {/*<Box>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/productos/nuevo"
        >
          <AddCircle />
          {`  Nuevo Producto`}
        </Button>
  </Box>*/}
      {isLoading && <p>Cargando...</p>}
      {!isLoading && categorias.length === 0 && <p>No hay productos</p>}
      {!isLoading &&
        categorias.length > 0 &&
        categorias.map((cat) => (
          <Box
            key={cat.id}
            sx={{
              display: "inline-block",
              padding: 2,
            }}
          >
            <CategoryCardComponent
              titulo={cat.descripcion}
              src={`src/assets/${cat.icono}`}
              path={`/productos/${cat.id}`}
            />
          </Box>
        ))}
      {!isLoading && categorias.length > 0 && (
        <Box
          sx={{
            display: "inline-block",
            padding: 2,
          }}
        >
          <CategoryCardComponent
            titulo="Agregar productos"
            src={`src/assets/plus.png`}
            path={`/productos/agregar`}
            height={60}
          />
        </Box>
      )}
    </Box>
  );
};
