import React from 'react';
import {AppBar, IconButton, Toolbar, Typography} from "@material-ui/core";
import {ShoppingBasket} from "@mui/icons-material";

const Header = () => {
  return (
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6' sx={{flexGrow:1}} component='span' >MUI Shop</Typography>
        <IconButton color='inherit'>
          <ShoppingBasket />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;