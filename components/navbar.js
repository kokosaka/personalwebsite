import Link from 'next/link';
import Social from './social';

const Navbar = (props) => (
  <div className="navbar" id={props.id}>
    {/* <Link href="/"><a className="navbar-item">home</a></Link> */}
    <ul className="navbar-list">
      <li ><a className="navbar-item" id="firstRef" onClick={props.scrollToRef}>about</a></li>
      <li ><a className="navbar-item" id="secondRef" onClick={props.scrollToRef}>experience</a></li>
      <li ><a href="/resume.pdf" className="navbar-item">résumé</a></li>
    </ul>
    <Social />
  </div>
);

export default Navbar;