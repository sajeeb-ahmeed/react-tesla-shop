
import React, { useEffect, useState } from 'react';
import { Alert, Button, Modal } from 'react-bootstrap';
import './Cart.css'


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


function MyVerticallyCenteredModal({ name, ...props }) {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    {name}
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h4>Centered Modal</h4>
                <p>
                    Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                    dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                    consectetur ac, vestibulum at eros.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


const Cart = (props) => {

    const [carts, setCarts] = useState([]);
    const [modalShow, setModalShow] = useState(false)
    const [randomCard, setRandomCard] = useState({ name: "" });
    // console.log(props);
    const { cart } = props;
    useEffect(() => {
        setCarts(cart)

    }, [cart])
    console.log(carts);
    // aleart 

    // lenght check 
    if (carts.length > 4) {
        return <Alertmiss></Alertmiss>
    }


    // Random item select 

    const clicked = (randomcarts) => {
        const random = Math.floor(Math.random() * randomcarts.length);
        setRandomCard(randomcarts[random]);
        setModalShow(true)

    }

    //chosse button 
    const reset = () => {
        setCarts([])

    }

    return (
        <div className='cart'>
            <h2 className='mb-3'>Selected Items: <span className='text-danger'>{carts.length}</span> </h2>
            < >{carts.map(products => <h5 key={products.id} className='bg-infos p-3'>{products.name}</h5>)}</>
            <h4 className='p-lg-3 p-1 price'>Total Price: $ {carts.length ? carts.reduce((a, b) => ({ price: a.price + b.price })).price : 0}</h4>
            {
                carts.length ? (
                    <>
                        <p className='btn btn-outline-dark' onClick={() => clicked(carts)} >Random Item Select</p> <br />
                        <p className='btn btn-outline-dark' onClick={() => reset()}>Chosse Again</p>
                    </>
                ) : ''
            }

            {
                modalShow ? <MyVerticallyCenteredModal show={modalShow}
                    onHide={() => setModalShow(false)} name={randomCard.name || 'Click Again'}></MyVerticallyCenteredModal> : ''
            }

        </div>
    )


};

export default Cart;