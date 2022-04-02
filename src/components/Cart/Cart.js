import React from 'react';
import { createPortal } from 'react-dom';

const Cart = ({cart,handelRemoveFromCart}) => {

    //Element variable
    let command;
    if(cart.length === 4){
        command = <p>already 4 item added</p>
    }else if(cart.length === 3){
        command = <p>please add 1 item</p>
    }else{
        command = <p>do you not want to add tshirt to cart</p>
    }
    return (
        <div>
            <h3>Order Summary</h3>
            <p>selected item:{cart.length}</p>
            {
                cart.map(tShirt => <div>
                    <p>{tShirt.name}<button onClick={()=>handelRemoveFromCart(tShirt)}>X</button></p>
                    
                </div>)
            }
            
            {command}
            {/*ternary oparator condition */}
            {cart.length === 4 ? <p>4 item is added</p> : <button>added more item</button>}
            {/* && oparator (shortHand) */}
            {cart.length === 1 && <p>are you poor man</p>}
            {/* or / || oparator condition */}
            {cart.length === 0 || <p>you are a rich man</p>}
        </div>
    );
};

export default Cart;