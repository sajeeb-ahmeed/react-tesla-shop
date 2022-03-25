
import React, { useEffect, useState } from 'react';
import Product from '../Products/Product';
import './Shop.css'
const Shop = () => {

    const [products, setProducts] = useState([]);
    useEffect(() => {

        fetch('data.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);


    return (
        <div className=' container-fulid  row mt-5'>
            <div className="col-md-7 mx-auto">
                <div className='product-container'>

                    {
                        products.map(product => <Product key={product.id} product={product} ></Product>)
                    }

                </div>

            </div>
            <div className="col-md-4">
                <h1>helooooooo</h1>
            </div>
        </div>
    );
};

export default Shop;