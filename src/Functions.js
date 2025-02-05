import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LocalGroceryStoreOutlinedIcon from '@mui/icons-material/LocalGroceryStoreOutlined';
import CalculateOutlinedIcon from '@mui/icons-material/CalculateOutlined';
import InventoryOutlinedIcon from '@mui/icons-material/InventoryOutlined';


export default function SimpleBottomNavigation() {
    const [value, setValue] = React.useState(0);
  
    return (
      <Box sx={{ width: '100%' }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Home" icon={<HomeOutlinedIcon />} />
          <BottomNavigationAction label="Sales" icon={<LocalGroceryStoreOutlinedIcon />} />
          <BottomNavigationAction label="Inventory" icon={<CalculateOutlinedIcon />} />
          <BottomNavigationAction label="Accounts" icon={<InventoryOutlinedIcon />} />
        </BottomNavigation>
      </Box>
    );
  }