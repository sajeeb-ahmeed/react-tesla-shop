
import React from 'react';

import './Product.css';
import { MdAddShoppingCart } from 'react-icons/md';

const Product = (props) => {
    // console.log(props.product);
    const { name, img, price, Description, seller } = props.product;
    return (
        <div className='col-12 products ' style={{ height: '45rem' }}>
            <>
                <img src={img} alt="" className='img-fulid  mb-4 ' width={400} height={400} />
                <h4>{name.slice(0, 30)}</h4>
                <h4>Price:  $ {price}</h4>
                <h6>Manufactured:  {seller}</h6>
                <small> <code>Description:</code> {Description}</small>

                <span onClick={() => props.handdleAddRoCart(props.product)} className=' btn btn-outline-dark  button'> Add To Cart <MdAddShoppingCart></MdAddShoppingCart> </span>
            </>

        </div>
    );
};

export default Product;