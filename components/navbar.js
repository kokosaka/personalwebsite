import Link from 'next/link';
import Social from './social';

const Navbar = () => (
  <div className="navbar">
    <ul className="navbar-list">
      <li ><Link href="/"><a className="navbar-item">home</a></Link></li>
      <li ><a href="/Resume2020.pdf" className="navbar-item">résumé</a></li>
    </ul>
    <Social />
  </div>
);

export default Navbar;