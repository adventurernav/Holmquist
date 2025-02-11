import React from 'react'
import { Button } from '@mui/material'
import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';

export default function Cart(props) {
  console.log(props);
  
  return (
    <div>
        <Button href='/sales'><ArrowBackIosRoundedIcon /></Button>
        <h1>Cart</h1>
    </div>
  )
}
