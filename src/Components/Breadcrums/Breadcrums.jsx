import React from 'react';
import './Breadcrums.css';
import { IoIosArrowForward } from "react-icons/io";
 
const Breadcrums = (props) => {
    const {product}=props;
  return (
    <div className='breadcrum'>
HOME<IoIosArrowForward />SHOP<IoIosArrowForward />{product.category} <IoIosArrowForward />{product.name}
    </div>
  )
}

export default Breadcrums
