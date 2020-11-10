import Head from 'next/head';
import { useEffect, useState } from 'react';
import Navbar from './navbar';
// import Footer from './footer';

const Layout = (props) => {
  const [prevScroll, setPrevScroll] = useState(0);
  const [showNav, setShowNav] = useState(true);

  const handleScroll = () => {
    const currentScroll = window.scrollY;
    if (prevScroll > currentScroll) {
      setShowNav(true);
    } else {
      setShowNav(false);
    }
    setPrevScroll(currentScroll);
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    //using addEventListeners in useEffect needs a return statement otherwise listener is removed immediately
    return () => window.removeEventListener("scroll", handleScroll);
});

  return (
    <div className="body" >
      <Head>
        <title>Koboh Kosaka</title>
      </Head>
        <Navbar id={showNav ? 'slideIn' : 'slideOut'} color={props.color} scrollToRef={props.scrollToRef} />
      {props.children}
    </div>
);
}

export default Layout;