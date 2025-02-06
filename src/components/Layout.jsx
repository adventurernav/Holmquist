import { Outlet, Link } from "react-router-dom";
import * as React from "react";
import {  Box, BottomNavigation, BottomNavigationAction } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";
import CalculateOutlinedIcon from "@mui/icons-material/CalculateOutlined";
import InventoryOutlinedIcon from "@mui/icons-material/InventoryOutlined";

function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500, bottom: 0, position: "fixed" }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeOutlinedIcon />}
          component={Link}
          to="/"
        />
        <BottomNavigationAction
          label="Sales"
          icon={<LocalGroceryStoreOutlinedIcon />}
          component={Link}
          to="/sales"
        />
        <BottomNavigationAction
          label="Inventory"
          icon={<CalculateOutlinedIcon />}
          component={Link}
          to="/nopage"
          disabled
        />
        <BottomNavigationAction
          label="Accounts"
          icon={<InventoryOutlinedIcon />}
          component={Link}
          to="/nopage"
          disabled
        />
      </BottomNavigation>
    </Box>
  );
}
const Layout = () => {
  return (
    <>
      <Outlet />
      
      <SimpleBottomNavigation />
    </>
  );
};

export default Layout;
