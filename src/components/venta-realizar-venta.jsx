import { Button } from '@mui/material'
import { useCajaStore } from "../store/caja";

export const RealizarVentaComponent = () => {

  const factura = useCajaStore((state) => state.factura)
  const ventaProducto = useCajaStore((state) => state.ventaProducto)
  const resumen = useCajaStore((state) => state.resumen)

  const handleClick = async () => {
    console.log('factura',factura)
    console.log('ventaProducto',ventaProducto)
    console.log('resumen',resumen)

    const apiUrl = 'http://localhost:3000/ventas';

    resumen.subtotal = parseFloat(resumen.subtotal)
    resumen.iva = parseFloat(resumen.iva)
    resumen.total = parseFloat(resumen.total)
    resumen.efectivo = parseFloat(resumen.efectivo)
    resumen.cambio = parseFloat(resumen.cambio)

    const body = {
        factura: factura,
        productos: ventaProducto,
        resumen: resumen
    }
  
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
  
    try {
      const response = await fetch(apiUrl, requestOptions);
  
      if (!response.ok) {
        throw new Error(`Error de red: ${response.status}`);
      }
  
      const responseData = await response.json();
      if(responseData.status == 201){
        console.log('Respuesta exitosa:', responseData);
      }
  
    } catch (error) {
      console.error('Error al realizar la solicitud:', error);
    }
  }

    return (
        <>
            <Button onClick={handleClick}>Realizar venta</Button>
        </>
    )
}