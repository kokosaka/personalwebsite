import Layout from '../components/layout';
import Link from 'next/link';
import Footer from '../components/footer';

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true
    }
    this.myRef = React.createRef();
    this.scrollToRef = this.scrollToRef.bind(this)
  }

  componentDidMount() {
    this.setState({
      isLoading: false
    })
  }

  scrollToRef() {
    this.myRef.current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  render() {
    return (
      this.state.isLoading ?
      <div className="loading">
        <div className="spinner"></div>
      </div> :
    <Layout>
      <div className="home">
        {new Date().toLocaleTimeString('en-GB') < '12' ? 'good morning' : new Date().toLocaleTimeString('en-GB') < '18' ? 'good afternoon' : 'good evening' }
        <button className='scroll-button' onClick={this.scrollToRef}>whoami</button>
      </div>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/kokosaka/">
          <img src="/linkedin.png" width="25px"/>
        </a>
        <a href="https://github.com/kokosaka">
          <img src="/github.png" width="25px"/>
        </a>
        <a href="mailto:kobohkosaka@gmail.com">
          <img src="/mail.png" width="25px"/>
        </a>
      </div>
      <div className="info-body" ref={this.myRef}>
        {/* <p style="height: 100px" >welcome</p> */}
        <h1>
          a little about myself
        </h1>
        <div className="bio">
          <p>Hello, my name is Koboh Kosaka and I am a software engineer.<br></br>
          Whether it's building web sites or phone applications, I enjoy collaborating with other engineers and solving difficult problems. Considering the resources I have at hand, I enjoy taking on challenges from different angles to improve on efficiency. I am intrigued by new technologies and wonder about the next steps I can take in building a better self and a better future. </p>
        </div>
        <h1>
          a little about my applications
        </h1>
        <div className="project">
          <a className="project-img" href="https://github.com/know-it-alls">
            <img src="/knowitall.gif" width="200px"/>
          </a>
          <div className="project-desc">
            <h2>Know It All Application</h2>
            <p>With a team of four, we built a trivia game application that could be played on iOS and Android. Built in React Native, I was in charge of implementing the category selection screen. The application sends a get request to a trivia API and receives/parses the object in the frontend.
            </p>
          </div>
        </div>
        <div className="project">
          <div className="project-desc">
            <h2>System Design Application</h2>
            <p>I inherited a team members application (a carousel of products) with a focus on improving the backend. With an initial throughput of 8 requests per second (rps), I set a goal to have the service handle 1000 rps. The backend was built with MongoDB and I wanted to compare the same service but with a SQL database (PostgreSQL). After seeding and indexing the databases with 10 million products, I monitored the services with New Relic, stress testing with k6. The PostgreSQL database was handling more at 244 rps so I decided to move forward with the SQL database. I deployed the database and the service to an AWS EC2 instance; stress tested with loader.io. The service handled up to 594 rps with a stress test configured at 1000 clients sending a request every second for 1 minute. I decided to horizontally scale the service and deployed another instance of the service and a load balancer proxy (nginx). Once deployed and tested, the goal of 1000 rps was achieved; with a 0% error rate and 68ms latency.</p>
          </div>
        </div>
        <div className="project">
          <a className="project-img" href="https://github.com/Dumpling-Squad/nav-bar">
            <img src="/navbar.gif"/>
          </a>
          <div className="project-desc">
            <h2>Front End Application</h2>
            <p>Teaming up with three other engineers, we recreated an item detail page mocking that of Glossier. Aside from creating a simple Express.js server and a MySQL database seeded from my AWS S3 bucket that held mock products; this application was focused heavily on the front-end. I chose to recreate the navigation bar because I wanted to challenge myself in solving the search function within the navigation bar. Glossier's search tab would filter the products upon the user's key press. This was achieved by sending the state of the search form to the back-end; querying the database at each keystroke. As for the best seller tabs, I designed the application to send a get request at the onHover of each tab to the corresponding category of makeup.</p>
          </div>
        </div>
      </div>
    <Footer />
    </Layout>
    )
  }
}

export default Index;