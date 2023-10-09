import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

let factura = {
  cliente_id: 1,
  tipo_pago: "efectivo",
  monto_total: 0,
  monto_pagado: 0,
  nombre_banco: "",
  cuenta_banco: "",
  usuario_id: 1,
};

export const useCajaStore = create(
  persist(
    (set, get) => ({
    factura: {},
    ventaProducto: [],
    resumen:[],
    agregarProducto: (producto, cantidad) => {
      let objProducto = {
        id: producto.id,
        producto: producto,
        descripcion: producto.descripcion,
        cantidad: parseInt(cantidad),
        precio_unitario: parseFloat(producto.precio_unitario),
        subtotal: parseFloat(producto.precio_unitario) * cantidad,
      };

      const productoEncontrado = get().ventaProducto.find(
        (p) => p.id === producto.id
      );
      if (productoEncontrado) {
        //si existe, aumentar la cantidad
        objProducto.cantidad =
          parseInt(productoEncontrado.cantidad) + parseInt(cantidad);
        objProducto.subtotal =
          parseFloat(productoEncontrado.subtotal) +
          producto.precio_unitario * cantidad;
        set({
          ventaProducto: [
            objProducto,
            ...get().ventaProducto.filter((p) => p.id !== producto.id),
          ],
        });
      } else {
        //si no existe, agregarlo
        set({ ventaProducto: [objProducto, ...get().ventaProducto] });
      }

      //console.log(get().ventaProducto);
    },
    quitarProducto: (id) => {
      set({ ventaProducto: get().ventaProducto.filter((p) => p.id !== id) });
    },
    generarFactura: () => {
      set({ factura: factura });
      //console.log(get().factura);
    },
    actualizarResumen: () => {
      let subtotal = 0;
      let iva = 0;
      let total = 0;
      let efectivo = 0;
      let cambio = 0;

      get().ventaProducto.forEach((p) => {
        subtotal += p.subtotal;
      });
      total = subtotal;
      subtotal = total / 1.16;
      iva = total - subtotal;

      efectivo = get().factura.monto_pagado;
      cambio = efectivo - total;

      set({
        resumen: {
          subtotal: subtotal.toFixed(2),
          iva: iva.toFixed(2),
          total: total.toFixed(2),
          efectivo: efectivo.toFixed(2),
          cambio: cambio.toFixed(2),
        },
      });
    }
  }),
  {
    name: "caja-storage",
    storage: createJSONStorage(() => sessionStorage),
  }
  )
);
