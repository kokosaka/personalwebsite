import { useEffect, useState } from 'react';
import Link from 'next/link';
import Social from './social';
import MenuIcon from '../public/menu';
import CloseIcon from '../public/closeIcon';

const MobileNav = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div >
      {showMenu ?
      <div>
        <div className="menuContainer" >
        </div>
          <div className="mobileMenu" >
            <div className="mobileMenu-icon" onClick={()=>{setShowMenu(false)}}>
              <CloseIcon />
            </div>
              <a className="navbar-item" id="firstRef" onClick={props.scrollToRef}>about</a>
              <a className="navbar-item" id="secondRef" onClick={props.scrollToRef}>experience</a>
              <a href="/Resume2020.pdf" className="navbar-item">résumé</a>
              <Social />
          </div>
        </div> :
        <div className="mobileNavbar" id={props.id}>
          <div className="mobileMenu-icon"  onClick={()=>{setShowMenu(true)}}>
            <MenuIcon />
          </div>
        </div> }
      </div>
  );
};

export default MobileNav;