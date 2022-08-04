import React from 'react';
import './Earrings.scss';
import { Product } from '../../components'


const Earrings = ({ items }) => {
  return (
    <div className="earrings">
      
      {
        items.map((obj) => (
          <Product key={obj.id} {...obj} />
        ))
      }
    </div>
  )
}

export default Earrings