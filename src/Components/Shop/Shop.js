
import React, { useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Product from '../Products/Product';
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    //EVENT HANDDLEER
    const handdleAddRoCart = (product) => {
        // console.log('clicked', product);
        const newCart = [...cart, product];
        setCart(newCart)
    }
    return (
        <div className=' container-fulid  row mt-5'>
            <div className="col-md-8 mx-auto ms-lg-5">
                <div className='product-container'>

                    {
                        products.map(product => <Product key={product.id} product={product} handdleAddRoCart={handdleAddRoCart} ></Product>)
                    }

                </div>

            </div>
            <div className="col-md-3 mx-auto">
                <div className=''>

                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Shop;