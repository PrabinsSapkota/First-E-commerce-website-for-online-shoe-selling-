import React from 'react'
import './Offers.css'
import exclusive_img from "../../assets/exclusive_img1.jpeg";



const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-left">
        <h1>Exclusive</h1>
        <h2>Offers For You</h2>
        <p>Get the best deals on your favourite products</p>
        <button>Check Now</button>
      </div>
      <div className="offers-right">
        <img src={exclusive_img} alt="" className='w-[350px] h-[450px] rounded-xl' />
      </div>
      
    </div>
  )
}

export default Offers
