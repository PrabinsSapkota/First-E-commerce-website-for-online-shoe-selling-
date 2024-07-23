import React from 'react';
import './Popular.css';  
import data_product from '../../assets/popular';
import Item from '../Item/Item';

const Popular = () => {
  return (
    <div className='popular'> 
      <h1 className='text-2xl font-bold'>Most Popular Shoes</h1>
      <hr />
      <div className="popular-item">
        {data_product.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} img={item.img} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
    </div>
  );
};

export default Popular;
