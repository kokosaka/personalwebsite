import Link from 'next/link';
import Social from './social';

const Navbar = (props) => (
  <div className="navbar">
    <ul className="navbar-list">
      <li ><Link href="/"><a className="navbar-item">home</a></Link></li>
      <li ><a href="/Resume2020.pdf" className="navbar-item">résumé</a></li>
    </ul>
    <Social color={props.color} linkedIn={props.linkedIn}/>
  </div>
);

export default Navbar;