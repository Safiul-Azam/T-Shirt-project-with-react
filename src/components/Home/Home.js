import React, { useState } from 'react';
import useTShirt from '../../hooks/useTShirt';
import TShirt from './TShirt/TShirt';
import './Home.css'
import Cart from '../Cart/Cart';

const Home = () => {
    const [tShirts, setTShirt] = useTShirt()
    const [cart, setCart] = useState([])
    if(cart.length === 4){

    }
    const handelAddToCart = (selectedTshirt)=>{
        if(cart.length !== 4){
        const exists = cart.find(tShirt => tShirt._id === selectedTshirt._id )
        if(!exists){
            const newCart = [...cart , selectedTshirt]
            setCart(newCart)
        }else{
            alert('T-Shirt is already exist')
        }
    }else{
        alert('already 4 item added')
    }
    }
    const handelRemoveFromCart = (selectedTshirt) =>{
        const rest = cart.filter(tShirt => tShirt._id !== selectedTshirt._id)
        setCart(rest)
    }
    return (
        <div className='container'>
            <div className="t-shirt-container">
             {
                 tShirts.map(tShirt => <TShirt 
                    key={tShirt._id} 
                    tShirt={tShirt}
                    handelAddToCart={handelAddToCart}
                    ></TShirt>)
             }
            </div>
            <div className='cart-container'>
                <Cart cart={cart} handelRemoveFromCart={handelRemoveFromCart}></Cart>
            </div>

        </div>
    );
};

export default Home;