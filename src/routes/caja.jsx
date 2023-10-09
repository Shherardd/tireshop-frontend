import { Box, Paper, Stack, Typography } from "@mui/material";
import { VentaProductosComponent } from "../components/venta-productos";
import { VentaResumenComponent } from "../components/venta-resumen";
import { useCajaStore } from "../store/caja";
import { PageHeaderComponent } from "../components/page-header";
import { useEffect } from "react";

export const Caja = () => {
  const generarFactura = useCajaStore((state) => state.generarFactura);

  useEffect(() => {
    generarFactura();
  }, [generarFactura]);

  return (
    <Box>
      <PageHeaderComponent titulo="Nueva venta" />
      <Stack direction="row">
        {/** Caja Vista principal */}
        <Box flex={5}>
          {/* Cliente Info */}
          <Paper elevation={1} sx={{padding:1, margin: '0 0 .6rem 0'}}>
            <Typography variant="h6">cliente #3242</Typography>
          </Paper>
          {/** Productos list */}
          <Paper elevation={2}>
            <VentaProductosComponent />
          </Paper>
        </Box>

        {/** Caja Resumen Ticket */}
        <Box flex={2}>
          <VentaResumenComponent />
        </Box>
      </Stack>
    </Box>
  );
};
