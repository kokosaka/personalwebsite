import Head from 'next/head';
import Navbar from './navbar';

const Layout = (props) => (
  <div className="body">
    <Head>
      <title>Koboh Kosaka</title>
    </Head>
    <h1>
      Koboh Kosaka
    </h1>
    <Navbar />
    {props.children}
  </div>
);

export default Layout;