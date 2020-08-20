import Link from 'next/link';

const Navbar = () => (
  <div className="navbar">
    <ul className="navbar-list">
      <li className="navbar-item"><Link href="/"><a>Home</a></Link></li>
      <li className="navbar-item"><Link href="/about"><a>About</a></Link></li>
    </ul>
  </div>
);

export default Navbar;