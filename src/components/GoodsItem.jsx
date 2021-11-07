import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Grid, Typography} from "@material-ui/core";

const GoodsItem = (props) => {
    const { name, price, setOrder,poster } = props;

    const onSetOrder = () => {
        setOrder({id: props.id,name: props.name,price: props.price})
    }
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{height:'100%'}}>
                <CardMedia
                    image={poster}
                    alt={name}
                    component='img'
                    title={name}
                    sx={{height:140}}
                />
                <CardContent>
                    <Typography variant='h6' component='h3'>{name}</Typography>
                    <Typography variant='body1'>Price: {price} dollar.</Typography>
                </CardContent>
                <CardActions>
                    <Button variant='outlined' onClick={onSetOrder} >  Buy </Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default GoodsItem;