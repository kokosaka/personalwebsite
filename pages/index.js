import Layout from '../components/layout';
import Link from 'next/link';
class Index extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
    this.scrollToRef = this.scrollToRef.bind(this)
  }

  scrollToRef() {
    this.myRef.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  render() {
    return (
    <Layout>
      <div className="home">
        {new Date().toLocaleTimeString('en-GB') < 12 ? 'good morning' : new Date().toLocaleTimeString('en-GB') < 18 ? 'good afternoon' : 'good evening' }
        <button className='scroll-button' onClick={this.scrollToRef}>whoami</button>
      </div>


      <div className="social-links">
        <a href="https://www.linkedin.com/in/kokosaka/">
          <img src="/linkedin.png" width="50px"/>
        </a>
        <a href="https://github.com/kokosaka">
          <img src="/github.png" width="50px"/>
        </a>
      </div>

      <div className="info-body">
        {/* <p style="height: 100px" >welcome</p> */}
        <h2 ref={this.myRef}>
          a little about myself
        </h2>
        <div>
          <p>Hello, my name is Koboh Kosaka. </p>
        </div>

        <div className="project">
          <a href="https://github.com/Dumpling-Squad/nav-bar">
            <img src="/navbar.gif"/>
          </a>
          <div className="project-desc">
            <h2>Front End Application</h2>
            <p>Teaming up with four other engineers, we recreated an item detail page mocking that of Glossier. Aside from creating a simple Express.js server and a MySQL database seeded from my AWS S3 bucket that held mock products; this application was focused heavily on the front-end. I chose to recreate the navigation bar because I wanted to challenge myself in solving the search function within the navigation bar. Glossier's search tab would filter the products upon the user's key press. This was achieved by sending the state of the search form to the back-end; querying the database at each keystroke. As for the best seller tabs, I designed the application to send a get request at the onHover of each tab to the corresponding category of makeup.</p>
          </div>
        </div>


      </div>
    </Layout>
    )
  }
}

export default Index;