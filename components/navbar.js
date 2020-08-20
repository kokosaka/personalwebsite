import Link from 'next/link';

const Navbar = () => (
  <div className="navbar">
    <div>KOBOH KOSAKA</div>
    <ul className="navbar-list">
      <li ><Link href="/"><a className="navbar-item">Home</a></Link></li>
      <li ><Link href="/about"><a className="navbar-item">About</a></Link></li>
      <li ><Link href="/resume"><a className="navbar-item">Resume</a></Link></li>
    </ul>
  </div>
);

export default Navbar;