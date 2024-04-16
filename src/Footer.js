import React from "react";
import Insta from '/Users/savage_knight/Desktop/NEETOMEREP/trail1/src/instagram_6422200.svg';
import Facebook from '/Users/savage_knight/Desktop/NEETOMEREP/trail1/src/facebook_6422199.svg';
import Pin from '/Users/savage_knight/Desktop/NEETOMEREP/trail1/src/pinterest_6422204.svg';
import Twitter from '/Users/savage_knight/Desktop/NEETOMEREP/trail1/src/twitter_6422210.svg';
import Logo from '/Users/savage_knight/Desktop/NEETOMEREP/trail1/src/WhatsApp Image 2024-04-16 at 2.51.23 PM.png';

const footer = () =>{
    return(
        <div className='footer'>
          <span className='footerlogo'>
            <div className="logoatfooter">
                <img className='footerlogoimg' src={Logo} alt='LOGO'/>
            </div>
            <div className="footerdata">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    pusmod temer 5edicuntutlntore er coiore manna 82018
                    enim ad minim veniam, quis nostru
                </p>
            </div>
            <div className="socialmedia">
                <img src={Insta} alt="instagram"/>
                <img src={Facebook} alt="instagram"/>
                <img src={Pin} alt="instagram"/>
                <img src={Twitter} alt="instagram"/>
            </div>
          </span>
          <span className='company'>
            <h3>company</h3>
            <ul>
              <li><a href='#'>About us</a></li>
              <li><a href='#'>Career</a></li>
              <li><a href='#'>Privacy Policies</a></li>
              <li><a href='#'>Terms & Conditions</a></li>
            </ul>
          </span>
          <span className='products'>
            <h3>products</h3>
            <ul>
              <li><a href='#'>Mock Teat Series</a></li>
              <li><a href='#'>Practice Test</a></li>
              <li><a href='#'>Past Question Papers</a></li>
              <li><a href='#'>Merchandise</a></li>
            </ul>
          </span>
          <span className='resources'>
            <h3>resources</h3>
            <ul>
              <li><a href='#'>Contact</a></li>
              <li><a href='#'>FAQ's</a></li>
              <li><a href='#'>Help Centre</a></li>
            </ul>
          </span>
        </div>
    );
}

export default footer;