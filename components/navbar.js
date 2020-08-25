import Link from 'next/link';

const Navbar = () => (
  <div className="navbar">
    <ul className="navbar-list">
      <li ><Link href="/"><a className="navbar-item">home</a></Link></li>
      {/* <li ><Link href="/about"><a className="navbar-item">About</a></Link></li> */}
      <li ><Link href="/resume"><a className="navbar-item">résumé</a></Link></li>
    </ul>
  </div>
);

export default Navbar;