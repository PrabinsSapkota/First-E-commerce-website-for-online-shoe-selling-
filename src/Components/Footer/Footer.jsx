import React from 'react'
import './Footer.css'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import logo from '../../assets/logo.png'
import { AiOutlineMail } from "react-icons/ai";


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo pt-8">
            <img src={logo} alt="" className='w-24 h-24 rounded-full' />
        <p>SNEAKERS VAULT</p>
        </div>
      <ul className="footer-links">
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="footer-social-icon">
     <div className='footer-icons-container'><FaInstagram  className='w-10 h-10'/></div> 
     <div className='footer-icons-container'> <FaWhatsappSquare   className='w-10 h-10'/></div>
     <div className='footer-icons-container'> <AiOutlineMail className='w-10 h-10'/></div>

      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright @2024 - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer
