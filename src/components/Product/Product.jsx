import React from 'react';
import './Product.scss';
import { GrFavorite } from 'react-icons/gr';
import {  Rings1 } from '../../assets/index'

const Product = ({id, name, imageUrl, price, onAddCart, onAddFavorite}) => {

  const handleAddCart = () => {
    const obj = {
      id, 
      name, 
      imageUrl, 
      price
    }
    onAddCart(obj)
  }

  const handleAddFavorite = () => {
    const obj = {
      id, 
      name,
      imageUrl,
      price
    }
    onAddFavorite(obj)
  }

  return (
    <div className="product">
    <div className="product_block">
        <img className='product_img' src={imageUrl} alt="RINGS" />
        <p className='product_title'>{name}</p>
        <div className="cart_total_block">
            <span>{price} руб. </span>
            <GrFavorite onClick={handleAddFavorite} className='added_favorite' size={24} />
            <div onClick={handleAddCart} className="added_cart">
                в корзинy
            </div>
        </div>
    </div>


</div>
  )
}

export default Product