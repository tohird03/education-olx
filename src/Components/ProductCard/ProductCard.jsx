import React from 'react';
import { Link } from "react-router-dom"
import { FiHeart } from 'react-icons/fi';

import "./ProductCard.scss"
const ProductCard = ({ data }) => {
    return (
        <div  className='product__card'>
            <Link className='product__card-link' to={`/singleproduct/${data.id}`}>
                <img className='product__img' src={data.images[0]} alt="" />

                <h3 className='product__heading'>
                    {data.title}
                </h3>
            </Link>

            {/* DESCRIPTION */}
            <p className='product__desc'>
                {data.description}
            </p>
            <div className='product__price-wrapper'>
                <strong className='product__price'>
                    ${data.price}
                </strong>
                <FiHeart />
            </div>
        </div>
    );
}

export default ProductCard;
