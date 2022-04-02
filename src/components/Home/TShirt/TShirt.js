import React from 'react';
import './TShirt.css'

const TShirt = ({tShirt, handelAddToCart}) => {
    const {name, picture, price, gender} =tShirt
    return (
        <div className='t-shirt-info'>
            <img src={picture} alt="" />
            <h3>{name}</h3>
            <p>Price: ${price}</p>
            <p>{gender}</p>
            <button onClick={()=>handelAddToCart(tShirt)}>add to cart</button>
        </div>
    );
};

export default TShirt;