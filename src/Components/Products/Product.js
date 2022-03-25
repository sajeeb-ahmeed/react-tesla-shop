
import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props.product);
    const { name, img, price, Description, seller, id } = props.product
    return (
        <div className='col-12 products'>
            <img src={img} alt="" className='img-fulid  mb-4 ' width={400} height={400} />
            <h4>{name.slice(0, 30)}</h4>
            <h4>Price:  $ {price}</h4>
            <h6>Manufactured:  {seller}</h6>
            <small> <code>Description:</code> {Description}</small>

            <button>Add To Cart</button>
        </div>
    );
};

export default Product;