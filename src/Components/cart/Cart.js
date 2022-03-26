import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import './Cart.css'
const Cart = (props) => {
    const { cart, id } = props;
    console.log(cart);
    // aleart 
    function Alertmiss() {
        const [show, setShow] = useState(true);

        if (show) {
            return (
                <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                    <Alert.Heading>Oh snap! You got an error! You can select only 4 items</Alert.Heading>
                    <p>
                        Change this and that and try again. Duis mollis, est non commodo
                        luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                        Cras mattis consectetur purus sit amet fermentum.
                    </p>
                </Alert>
            );
        }
        return <Button onClick={() => setShow(true)}>Show Mistake !</Button>;
    };


    // lenght check 
    if (cart.length > 4) {
        return Alertmiss()
    }
    console.log(cart);

    // show product name on UI 
    const ProductCart = cart.map(products => <h5 key={products.id} className='bg-infos p-3'>{products.name}</h5>);
    console.log(ProductCart);
    const newCart = [...ProductCart];
    console.log(newCart);

    //get price 

    let total = 0;
    for (const product of cart) {
        total = total + product.price;
    }

    // Random item select 

    function randomIntFromInterval(newCart) { // min and max included 
        const a = newCart[Math.floor(Math.random() * newCart.length)];
        return alert(a[0])

    }

    // const rndInt = randomIntFromInterval(newCart, 2)
    // console.log(rndInt)
    // const res = Math.floor(Math.random() * 11);
    // console.log(res);

    return (
        <div className='cart'>
            <h2 className='mb-3'>Selected Items: <span className='text-danger'>{cart.length}</span> </h2>
            < >{newCart}</>
            <h4 className='p-lg-3 p-1 price'>Total Price: $ {total}</h4>
            <p className='btn btn-outline-dark' onClick={() => randomIntFromInterval(newCart)} >Random Item Select</p> <br />
            <p className='btn btn-outline-dark'>Chosse Again</p>

        </div>
    )


};

export default Cart;