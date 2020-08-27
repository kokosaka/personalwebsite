import Link from 'next/link';

const Navbar = () => (
  <div className="navbar">
    <ul className="navbar-list">
      <li ><Link href="/"><a className="navbar-item">home</a></Link></li>
      <li ><a href="/resume.pdf" className="navbar-item">résumé</a></li>
    </ul>
  </div>
);

export default Navbar;