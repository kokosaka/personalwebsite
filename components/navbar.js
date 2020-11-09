import Link from 'next/link';
import Social from './social';

const Navbar = (props) => (
  <div className="navbar">
    <ul className="navbar-list">
      {/* <li ><Link href="/"><a className="navbar-item">home</a></Link></li> */}
      <li ><a className="navbar-item" id="firstRef" onClick={props.scrollToRef}>about</a></li>
      <li ><a className="navbar-item" id="secondRef" onClick={props.scrollToRef}>experience</a></li>
      <li ><a href="/Resume2020.pdf" className="navbar-item">résumé</a></li>
    </ul>
    <Social color={props.color} />
  </div>
);

export default Navbar;