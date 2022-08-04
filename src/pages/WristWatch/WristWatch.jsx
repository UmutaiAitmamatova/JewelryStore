import React from 'react';
import './WristWatch.scss';
import { Product } from '../../components'


const WristWatch = ({items}) => {
  return (
    <div className="WristWatch">
            {
        items.map((obj) => (
          <Product key={obj.id} {...obj} />
        ))
      }
    </div>
  )
}

export default WristWatch