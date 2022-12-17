import React, { Component } from 'react';
import './Product.css';
import donut from './images/donut.png';
import ice_cream from './images/icecream.png';
import watermelon from './images/watermelon.png';

// defining the products names photos and prices
const products = [
    {
    emoji: ice_cream,
    name: 'ice cream',
    price: 5,
    },
    {
    emoji: donut,
    name: 'donut',
    price: 2.5,
    },
    {
    emoji: watermelon,
    name: 'watermelon',
    price: 4,
    }
];

export default class Product extends Component {

    //initializing the cart as empty
    state = {
        cart: [],
    }

    //on every add click we refresh the cart's state => the number of items and total price
    add = (product) => {
    this.setState(state => ({
    cart: [...state.cart, product],
    }))
    }

    //to make the total be like 0.00 having two digits only after the point
    currencyOptions = {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }

    //returning the total price using the currencyOptions format
    getTotal = () => {
        const total = this.state.cart.reduce((totalCost, item) => totalCost +item.price, 0);
        return total.toLocaleString(undefined, this.currencyOptions)
    }

    //reducing the item count as well as their price
    remove = (product) => {
        this.setState(state => {
        const cart = [...state.cart];
        const productIndex = cart.findIndex(p => p.name === product.name);
        if(productIndex < 0) {
        return;
        }
        cart.splice(productIndex, 1)
        return ({
        cart
        })
        })
    }

    render() {
    return(
    <div className="wrapper">
    <div>Shopping Cart: <span className='numeric'>{this.state.cart.length} </span>total items.</div>
    <div>Total <span className='numeric'>{this.getTotal()}</span> TND</div>

    <div className='items'>
    {products.map(product => (
    <div key={product.name}>
    <div className="product">
    <img src={product.emoji} alt={product.name}/>
    <br/><span>{product.name}</span>
    </div>
    <button onClick={() => this.add(product)}>Add</button>
    <button onClick={() => this.remove(product)}>Remove</button>
    </div>
    ))}
    </div>
    </div>
    )
    }
}