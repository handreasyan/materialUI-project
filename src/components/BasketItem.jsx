import {IconButton, ListItem, Typography} from "@material-ui/core";
import {Close} from "@mui/icons-material";

const BasketItem = ({quantity,name,price,removeFromOrder}) => {
    return (
        <ListItem>
          <Typography variant='body1'>
            {name} {price}dollar x{quantity}
          </Typography>
            <IconButton
                className='btn btn-primary'
                onClick={removeFromOrder}
            >
               <Close/>
            </IconButton>
        </ListItem>
    );
};

export default BasketItem;