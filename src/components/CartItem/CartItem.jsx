import React from 'react';
import './CartItem.scss';
import { ImCross } from 'react-icons/im';


const CartItem = ({name, imageUrl, price}) => {
  return (
        <div className="cart_block">
            <img className='cart_img' src={imageUrl} alt="CART" />
            <div className="cart_title"> aaaa{name}</div>
            <span> ss{price} руб. </span>
            <div className="cart__delete">
            <ImCross className='icon'/>

            </div>
    </div>
  )
}

export default CartItem