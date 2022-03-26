import { render } from '@testing-library/react';
import React, { useState } from 'react';
import { Alert, Button } from 'react-bootstrap';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props;
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

    const ProductCart = cart.map(products => <h5 key={products.id} className='bg-infos p-3'>{products.name}</h5>);
    console.log(ProductCart);
    const newCart = [...ProductCart]

    return (
        <div className='cart'>
            <h1>Selected Items: <span className='text-danger'>{cart.length}</span> </h1>
            <h5 >{newCart}</h5>
        </div>
    )


};

export default Cart;