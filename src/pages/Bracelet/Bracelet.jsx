import React from 'react';
import './Bracelet.scss';
import { GrFavorite } from 'react-icons/gr';
import {  Rings1 } from '../../assets'


const Bracelet = () => {
  return (
    <div className="product">


    <div className="product_block">
        <img className='product_img' src={Rings1} alt="RINGS" />
        <p className='product_title'>Кольцо с цирконом <br/> Кфтн-4278-1</p>
        <div className="cart_total_block">
            <span>9 956 руб. </span>
            <GrFavorite size={24}/>
            <div className="added_cart">
                в корзине
            </div>
        </div>
    </div>


</div>
  )
}

export default Bracelet