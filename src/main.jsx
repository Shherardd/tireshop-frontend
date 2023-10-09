import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./pages/error-page/error-page";
import {Clientes} from './routes/clientes';
import {ClientesDetalle} from './routes/clientes-detalle';
import {ClientesDetalleEditar} from './routes/clientes-detalle-editar';
import { Caja } from './routes/caja';
import { Dashboard } from './routes/dashboard';
import { Venta } from './routes/venta';
import { Productos } from './routes/productos';
import { ListaProductosPage } from './pages/lista-productos-page';
import { AlmacenRoute } from './routes/almacen';
import { FacturacionRoute } from './routes/facturacion';
import { ConfiguracionRoute } from './routes/configuracion';
import { AgregarProductosComponent } from './pages/productos-agregar';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Navigate to="/dashboard" replace />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/clientes",
        element: <Clientes/>
      },
      {
        path: "/clientes/:id",
        element: <ClientesDetalle/>
      },
      {
        path: "/clientes/:id/editar",
        element: <ClientesDetalleEditar/>
      },
      {
        path: "/caja",
        element: <Caja/>
      },
      {
        path: "/ventas",
        element: <Venta/>
      },
      {
        path: "/productos",
        element: <Productos/>
      },
      {
        path: "/productos/:categoria",
        element: <ListaProductosPage/>
      },
      {
        path: "/productos/agregar",
        element: <AgregarProductosComponent/>
      },
      {
        path: "/almacen",
        element: <AlmacenRoute/>
      },
      {
        path: "/facturacion",
        element: <FacturacionRoute/>
      },
      {
        path: "/configuracion",
        element: <ConfiguracionRoute/>
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
