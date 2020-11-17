import { useEffect, useState } from 'react';
import Link from 'next/link';
import Social from './social';
import MenuIcon from '../public/menu';
import CloseIcon from '../public/closeIcon';

const MobileNav = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="mobileNav" >
      {showMenu ?
        <div className="mobileMenu" >
          <div className="mobileMenu-icon" onClick={()=>{setShowMenu(false)}}>
            <CloseIcon />
          </div>
            <a className="navbar-item" id="firstRef" onClick={props.scrollToRef}>about</a>
            <a className="navbar-item" id="secondRef" onClick={props.scrollToRef}>experience</a>
            <a href="/Resume2020.pdf" className="navbar-item">résumé</a>
            <Social />
        </div> :
        <div className="mobileMenu-icon" id={props.id} onClick={()=>{setShowMenu(true)}}>
          <MenuIcon />
        </div> }
      </div>
  );
};

export default MobileNav;