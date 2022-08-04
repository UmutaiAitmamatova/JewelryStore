import React from 'react';
import './Rings.scss';
import { Product } from '../../components'


const Rings = ({ items }) => {

  return (
    <div className="rings">

      {
        items.map((obj) => (
          <Product key={obj.id} {...obj} />
        ))
      }

</div>
  )
}

export default Rings