import React from 'react';
import "./Category-item.scss"
const CategoryItem = ({img, title}) => {
    return (
        <div className='category'>
            <img className='category__item-img' src={img} alt="" />

            <h2 className='category__item-heading'>{title}</h2>
        </div>
    );
}

export default CategoryItem;
