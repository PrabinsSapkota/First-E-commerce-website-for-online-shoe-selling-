import React, { useContext } from 'react';
import '../Pages/CSS/ShopCategory.css';
import { IoIosArrowDropdown } from "react-icons/io";
import Item from '../Components/Item/Item';
import { ShopContext } from '../Context/ShopContext';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);

  // Check if all_product or all_product.all_product is undefined or empty
  if (!all_product || !all_product.length) {
    return <p>Loading...</p>; // Handle loading state or error state as needed
  }

  // Filter products based on category
  const filteredProducts = all_product.filter(item => item.category === props.category);

  return (
    <div className='shop-category'>
      <img src={props.banner}  alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-{filteredProducts.length}</span> out of {all_product.length} products
        </p>
        <div className="shopcategory-sort">
          Sort by <IoIosArrowDropdown />
        </div>
      </div>
      <div className="shopcategory-products">
        {filteredProducts.map((item) => (
          <Item
            key={item.id}
            id={item.id}
            name={item.name}
            img={item.img}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </div>
  );
};

export default ShopCategory;
