
import React from 'react';

import './Product.css';
import { MdAddShoppingCart } from 'react-icons/md';

const Product = (props) => {
    // console.log(props.product);
    const { name, img, price, Description, seller } = props.product;
    return (
        <div className='col-12 products ' style={{ height: '45rem' }}>
            <>
                <img src={img} alt="" className=' mb-4 ' width={400} height={400} />
                <h4>{name.slice(0, 30)}</h4>
                <h4>Price:  $ {price}</h4>
                <h6>Manufactured:  {seller}</h6>
                <small className='text-justify'> <code>Description:</code> {Description.slice(0, 120)}...</small>

                <span onClick={() => props.handdleAddRoCart(props.product)} className=' btn btn-outline-dark  button '> Add To Cart <MdAddShoppingCart className='ms-2 fw-bold'></MdAddShoppingCart> </span>
            </>

        </div>
    );
};

export default Product;