import React from 'react';
import {Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography} from "@material-ui/core";
import {ShoppingBasket} from "@mui/icons-material";
import BasketItem from "./BasketItem";

const Basket = ({order = [],removeFromOrder,cartOpen,closeCart} = Function.prototype) => {
  return (
    <Drawer anchor='right' open={cartOpen} onClose={closeCart}>
      <List sx={{width:'400px'}}>
        <ListItem>
          <ListItemIcon>
            <ShoppingBasket />
          </ListItemIcon>
          <ListItemText primary='Box'/>
        </ListItem>
        <Divider />
        {
          !order.length ? (
            <ListItem>Box is empty</ListItem>
          ) : (
            <>
              {
                order.map(item=><BasketItem removeFromOrder={()=>removeFromOrder(item.id)} key={item.id} {...item}/>)
              }
              <Divider />
              <ListItem>
                <Typography sx={{fontWeight:'700'}}>
                  Sum price:
                  {order.reduce((acc, item) => acc + item.price * item.quantity, 0)}
                  dollar.
                </Typography>
              </ListItem>
            </>

          )
        }
      </List>
    </Drawer>
  );
};

export default Basket;