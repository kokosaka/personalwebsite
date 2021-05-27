import Head from "next/head";
import { useEffect, useState } from "react";
import MobileNav from "./mobileNav";
import Navbar from "./navbar";
import MenuIcon from "../public/menu";

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
  };

  useEffect(() => {
    //   setIsMobile(true);
    // }
    window.addEventListener("scroll", handleScroll);
    //using addEventListeners in useEffect needs a return statement otherwise listener is removed immediately
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <div className="body">
      <Head>
        <title>Koboh Kosaka</title>
      </Head>
      <MobileNav
        id={showNav ? "slideIn" : "slideOut"}
        scrollToRef={props.scrollToRef}
      />
      <Navbar
        id={showNav ? "slideIn" : "slideOut"}
        scrollToRef={props.scrollToRef}
      />
      {props.children}
    </div>
  );
};

export default Layout;
