import React from 'react';
import './Footer.css';
import { assets } from '../../assets/assets';

const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className='footer-content'>
        <div className="footer-content-left">
          <img src={assets.logo} alt="Company Logo" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus molestiae numquam doloribus odio quas cumque deleniti, maiores perspiciatis quod necessitatibus nesciunt! Sunt impedit aut voluptatibus animi id? Assumenda, enim iure.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-9878</li>
            <li>contactadmin@tomato.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className='footer-copyright'>
        Copyright 2025 © Tomato.com - All Rights Reserved
      </p>
    </div>
  );
};

export default Footer;
