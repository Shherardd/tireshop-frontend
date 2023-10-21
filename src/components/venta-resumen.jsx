import { Box, Container, Paper } from "@mui/material";
import Divider from "@mui/material/Divider";
import top from "../assets/top.svg";
import styles from "./venta-resumen.module.css";
import { useCajaStore } from "../store/caja";
import { useEffect } from "react";
import { RealizarVentaComponent } from "./venta-realizar-venta";

export const VentaResumenComponent = () => {
  const resumen = useCajaStore((state) => state.resumen);
  const actualizarResumen = useCajaStore((state) => state.actualizarResumen);
  
  useEffect(() => {
    actualizarResumen();
  }, [actualizarResumen]);

  return (
    <Container>
      <img src={top} alt="ticket" className={`${styles.ticketTop}`} />
      <Paper elevation={2}>
        {/** Ticket banner */}
        <Box
          sx={{
            backgroundColor: "primary.main",
            padding: 1,
            color: "primary.contrastText",
          }}
        >
          <Divider light={true}> Resumen </Divider>
        </Box>

        {/** Ticket Body */}
        <Box
          sx={{
            backgroundColor: "white",
            padding: 2,
            color: "primary",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 2,
            }}
          >
            <Box>Subtotal</Box>
            <Box>$ {`${resumen.subtotal}`}</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 2,
            }}
          >
            <Box>IVA</Box>
            <Box>$ {`${resumen.iva}`}</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              padding: 2,
            }}
          >
            <Box>Total</Box>
            <Box>$ {`${resumen.total}`}</Box>
          </Box>
        </Box>
      </Paper>
      <RealizarVentaComponent/>
    </Container>
  );
};
