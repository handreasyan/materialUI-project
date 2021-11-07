import React from 'react';

import GoodsItem from './GoodsItem';
import {Grid} from "@material-ui/core";

const GoodsList = (props) => {
    const { goods, setOrder } = props;

    return (
      <Grid container spacing={2}>
        {goods.map((item) => (
          <GoodsItem key={item.id} setOrder={setOrder} {...item} />
        ))}
      </Grid>
    );
};

export default GoodsList;