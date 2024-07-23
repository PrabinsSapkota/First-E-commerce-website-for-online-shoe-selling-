import React, { useContext } from 'react';
import './ProductDisplay.css';
import { ShopContext } from '../../Context/ShopContext';
import { FcRating } from "react-icons/fc";

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
    return (
    <div className='productdisplay'>
      <div className="productdisplay-left">
        <div className="productdisplay-img-list">
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
          <img src={product.img} alt="" />
        </div>
        <div className="productdisplay-img">
          <img className='productdisplay-main-img' src={product.img} alt="" />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <FcRating />
          <FcRating />
          <FcRating />
          <FcRating />
          <FcRating />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-price-old">Rs.{product.old_price}</div>
          <div className="productdisplay-right-price-new">Rs.{product.new_price}</div>
        </div>
        <div className="productdisplay-right-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis ipsa minus eaque consectetur praesentium pariatur at velit ratione aut deleniti.
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
          <div className="productdisplay-right-sizes">
            <div>39</div>
            <div>40</div>
            <div>41</div>
            <div>42</div>
            <div>43</div>
          </div>
        </div>
        <button onClick={() => addToCart(product.id)}>ADD TO CART</button>
         <p className='productdisplay-right-category'><span>Category:</span> Unisex, Shoes, Sneaker</p>
        <p className='productdisplay-right-category'><span>Tags:</span> Modern, Latest</p>
      </div>
    </div>
  );
}

export default ProductDisplay;
