import React from 'react';
import './Cart.css'
const Cart = ({ cart }) => {
    console.log(cart);

    let total = 0;
    let selectedItems = []
    for (const product of cart) {
        total = total + product.price;
        selectedItems = product.name

    }



    return (
        <div className='cart'>
            <h3 className='text-center mb-5'>Order Summary</h3>
            {/* <h6> Selected Items:  {selectedItems}</h6> */}
            <h6> Total Price: $ {total}</h6>

            <br />
            <button className='btn btn-outline-dark'>Clear Cart</button> <br /> <br />
            <button className='btn btn-outline-dark'>Review Order</button>
        </div>
    );
};

export default Cart;