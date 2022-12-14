import React from 'react';
import './Ordersplaced.css'
import { useStateValue } from "./StateProvider";

function Ordersplaced({ id, image, title, price, rating, hideButton }) {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                    <br></br>
                    <small>{id}</small>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Ordersplaced