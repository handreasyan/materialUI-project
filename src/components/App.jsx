import {useState} from 'react';
import GoodsList from './GoodsList';
import Search from './Search';
import {goods} from '../data/goods';
import Header from "./Header";
import {Container} from "@material-ui/core";
import Basket from "./Basket";
import Snack from "./Snack";

const App = () => {
    const [order, setOrder] = useState([]);
    const [search, setSearch] = useState('');
    const [products, setProducts] = useState(goods);
    const [isCartOpen, setCartOpen] = useState(false);
    const [isSnackOpen, setSnackOpen] = useState(false);

    const handleChange = (e) => {
        if (!e.target.value) {
            setProducts(goods);
            setSearch('');
            return;
        }
        setSearch(e.target.value);
        setProducts(products.filter((good) => good.name.toLowerCase().includes(e.target.value.toLowerCase())))
    };

    const addToOrder = (goodsItem) => {
        let quantity = 1;
        const indexInOrder = order.findIndex((item) => item.id === goodsItem.id );
        let newOrder
        if (indexInOrder > -1) {
            quantity = order[indexInOrder].quantity + 1;
            newOrder = order.map((item) => {
                return item.id !== goodsItem.id ? item : {id: item.id, name: item.name,price: item.price,quantity }
            })
        } else {
            newOrder = [...order,{id: goodsItem.id, name: goodsItem.name,price: goodsItem.price,quantity}]
        }
        setSnackOpen(true)
        setOrder(newOrder);
    };

    const removeFromOrder = (goodsItem) => {
        setOrder(order.filter((item) => item.id !== goodsItem));
    };

    return (
      <>
          <Header handleCart={()=>setCartOpen(true)} orderLen={order.length}/>
          <Container sx={{mt:'1rem'}}>
              <Search value={search} onChange={handleChange} />
              <GoodsList goods={products} setOrder={addToOrder} />
          </Container>
          <Snack handleClose={()=>setSnackOpen(false)} isOpen={isSnackOpen}/>
          <Basket cartOpen={isCartOpen} removeFromOrder={removeFromOrder} order={order} closeCart={()=>setCartOpen(false)} />
      </>

    );
}

export default App;
