import {
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    ListItemIcon,
  } from "@mui/material";
  import {
    ShoppingCart,
    PointOfSale,
    SupervisedUserCircleSharp,
    Inventory,
    Receipt,
    Settings,
    Category,
    Dashboard,
  } from "@mui/icons-material";
  import Divider from "@mui/material/Divider";
  import {  Link } from "react-router-dom";
  import logo from "../assets/logo_blue.svg";
  import style from "./sidebar.module.css";


  export const Sidebar = () => {
    return (
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          { /*<Typography
            variant="h6"
            component="div"
            align="center"
            sx={{
              p: 2,
            }}
          >
            Menu
          </Typography> */}
          <Box sx={{padding:2, maxHeight:'70px'}}>
            <img src={logo} className={style.logo}></img>
          </Box>
          <Divider />
          <nav>
            <List>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="/dashboard">
                  <ListItemIcon>
                    <Dashboard />
                  </ListItemIcon>
                  <ListItemText primary="Dashboard" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/caja">
                  <ListItemIcon>
                    <ShoppingCart />
                  </ListItemIcon>
                  <ListItemText primary="Caja" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/ventas">
                  <ListItemIcon>
                    <PointOfSale />
                  </ListItemIcon>
                  <ListItemText primary="Ventas" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/clientes">
                  <ListItemIcon>
                    <SupervisedUserCircleSharp />
                  </ListItemIcon>
                  <ListItemText primary="Clientes" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/productos">
                  <ListItemIcon>
                    <Category />
                  </ListItemIcon>
                  <ListItemText primary="Productos" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/almacen">
                  <ListItemIcon>
                    <Inventory />
                  </ListItemIcon>
                  <ListItemText primary="Almacén" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/facturacion">
                  <ListItemIcon>
                    <Receipt />
                  </ListItemIcon>
                  <ListItemText primary="Facturación" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton component={Link} to="/configuracion">
                  <ListItemIcon>
                    <Settings />
                  </ListItemIcon>
                  <ListItemText primary="Configuración" />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
    );
}