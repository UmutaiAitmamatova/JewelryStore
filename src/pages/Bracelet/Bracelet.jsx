import React from 'react';
import './Bracelet.scss';
import { Product } from '../../components'


const Bracelet = ({ items }) => {
  return (
    <div className="bracelet">
            {
        items.map((obj) => (
          <Product key={obj.id} {...obj} />
        ))
      }
    </div>
  )
}

export default Bracelet