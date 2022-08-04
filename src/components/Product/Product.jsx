import React from 'react';
import './Product.scss';
import { GrFavorite } from 'react-icons/gr';
import {  Rings1 } from '../../assets/index'

const Product = ({name, imageUrl, price}) => {
  return (
    <div className="product">
    <div className="product_block">
        <img className='product_img' src={imageUrl} alt="RINGS" />
        <p className='product_title'>{name}</p>
        <div className="cart_total_block">
            <span>{price} руб. </span>
            <GrFavorite size={24}/>
            <div className="added_cart">
                в корзине
            </div>
        </div>
    </div>


</div>
  )
}

export default Product