import React from 'react';
import './card.styles.css';
export const Card = props => (
<div className = 'card-container'>
    <img alt='products' src={props.product.image} />
    <h4> {props.product.title}  </h4>
    <p>${props.product.price}</p> 
</div>
);
