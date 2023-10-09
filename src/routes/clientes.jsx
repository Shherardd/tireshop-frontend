import { useEffect } from "react";
import { useClienteStore } from "../store/cliente";
import { DataTableClientes } from "../components/users-table";
import { Box, Button, Stack } from "@mui/material";
import { PersonAdd } from "@mui/icons-material";
import { PageHeaderComponent } from "../components/page-header";

export const Clientes = () => {
  const fetchClientes = useClienteStore((state) => state.fetchClientes);
  const clientes = useClienteStore((state) => state.clientes);
  const isLoading = useClienteStore((state) => state.isLoading);

  useEffect(() => {
    fetchClientes();
  }, [fetchClientes]);

  return (
    <>
      <Box>
      <PageHeaderComponent titulo="Clientes" />
        <Stack
        padding={2}
          direction="row"
          justifyContent="space-between"
          alignItems="stretch"
          spacing={1}
        >
         <h1></h1> 
          <Button variant="contained" color="primary">
            <PersonAdd />
          </Button>
        </Stack>
      </Box>
      {isLoading && <p>Cargando...</p>}
      {!isLoading && clientes.length === 0 && <p>No hay clientes</p>}
      {!isLoading && clientes.length > 0 && (
        <DataTableClientes rows={clientes} />
      )}
    </>
  );
};
