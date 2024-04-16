import React from 'react'
import Profile from '/Users/savage_knight/Desktop/NEETOMEREP/trail1/src/abstract-user-flat-4.svg';
import Bell from '/Users/savage_knight/Desktop/NEETOMEREP/trail1/src/bell-outline-svgrepo-com.svg';
import Logo from '/Users/savage_knight/Desktop/NEETOMEREP/trail1/src/WhatsApp Image 2024-04-16 at 2.51.23 PM.png';

const Nav = () => {
  return (
    <div className='nav'>
          <div className='navstart'>
            <img className='navlogo' src={Logo} alt='LOGO'/>
            <ul className='navlist'>
                <li><a href='#'>Dashboard</a></li>
                <li><a href='#'>Finance</a></li>
                <li><a href='#'>MyListing</a></li>
            </ul>
          </div>
          <div className='navend'>
            <span className='searchborder'>
              <span class="material-symbols-outlined">
                search
              </span>
              <input className='navsearch' placeholder=' Search Anything'/>
            </span>
            <div className='navicons'>
              <img className='navbell' src={Bell} alt='bell'/>
              <img className='navprofile' src={Profile} alt='profile'/>
            </div>
          </div>
       </div>
  );
}

export default Nav;
