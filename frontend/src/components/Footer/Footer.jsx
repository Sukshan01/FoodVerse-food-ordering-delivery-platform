import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>

        <div className="footer-content">

            <div className="footer-content-left">

                <img className='footer-logo' src={assets.food_del_logo} alt="" />
                <p>Experience seamless food ordering with our dynamic MERN stack-powered delivery application. Effortlessly browse, add to your cart, and make secure payments—all in one place.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            
            <div className="footer-content-center">

                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
                
            </div>

            <div className="footer-content-right">

            <h2>GET IN TOUCH</h2>

            <ul>
                <li>+91-943-7878-248</li>
                <li>contact@foodverse.com</li>
            </ul>


            </div>

           
        </div>

        <hr />
        <p className='footer-copyright'>Sukshan Channe | Copyright 2024 @ FoodVerse.com - All Rights Reserved</p>
      
    </div>
  )
}

export default Footer
