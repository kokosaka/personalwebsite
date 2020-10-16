import Head from 'next/head';
import Navbar from './navbar';
// import Footer from './footer';

const Layout = (props) => (
  <div className="body">
    <Head>
      <title>Koboh Kosaka</title>
    </Head>
    <Navbar color={props.color} linkedIn={props.linkedIn}/>
    {props.children}
  </div>
);

export default Layout;