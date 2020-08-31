import Eye from '../public/eye.svg';
import Closed from '../public/closed.svg';

const Applications = (props) => (
  <div className="applications">
    <h1>
      a little about my applications
    </h1>

    <div className="project">
      {props.knowItAllGif &&
      <a className="project-img">
        <img src="/knowitall.gif" width="200px"/>
      </a>}
      <div className="project-desc">
        <h2>Know It All Application</h2>
        <p>With a team of four, we built a trivia game application that could be played on iOS and Android. Built in React Native, I was in charge of implementing the category selection screen. The application sends a get request to a trivia API and receives/parses the object in the frontend.
        </p>
      </div>
      <div className="project-links">
        {props.knowItAllGif ?
          <Closed id="knowItAllGif" className="eye" onClick={props.showGif}/> :
          <Eye id="knowItAllGif" className="eye" onClick={props.showGif}/>
        }
        <a href="https://github.com/know-it-alls">
          <img src="/github.png" width="25px"/>
        </a>
      </div>
    </div>

    <div className="project">
      <div className="project-desc">
        <h2>System Design Application</h2>
        <p>I inherited a team members application (a carousel of products) with a focus on improving the backend. With an initial throughput of 8 requests per second (rps), I set a goal to have the service handle 1000 rps. The backend was built with MongoDB and I wanted to compare the same service but with a SQL database (PostgreSQL). After seeding and indexing the databases with 10 million products, I monitored the services with New Relic, stress testing with k6. The PostgreSQL database was handling more at 244 rps so I decided to move forward with the SQL database. I deployed the database and the service to an AWS EC2 instance; stress tested with loader.io. The service handled up to 594 rps with a stress test configured at 1000 clients sending a request every second for 1 minute. I decided to horizontally scale the service and deployed another instance of the service and a load balancer proxy (nginx). Once deployed and tested, the goal of 1000 rps was achieved; with a 0% error rate and 68ms latency.</p>
      </div>
      <div className="project-links">
        <a href="https://github.com/Dumplings-Reloaded/related-items">
          <img src="/github.png" width="25px"/>
        </a>
      </div>
    </div>

    <div className="project">
      {props.navBarGif &&
      <a className="project-img">
        <img src="/navbar.gif"/>
      </a>}

      <div className="project-desc">
        <h2>Front End Application</h2>
        <p>Teaming up with three other engineers, we recreated an item detail page mocking that of Glossier. Aside from creating a simple Express.js server and a MySQL database seeded from my AWS S3 bucket that held mock products; this application was focused heavily on the front-end. I chose to recreate the navigation bar because I wanted to challenge myself in solving the search function within the navigation bar. Glossier's search tab would filter the products upon the user's key press. This was achieved by sending the state of the search form to the back-end; querying the database at each keystroke. As for the best seller tabs, I designed the application to send a get request at the onHover of each tab to the corresponding category of makeup.</p>
      </div>
      <div className="project-links">
        {props.navBarGif ?
          <Closed id="navBarGif" onClick={props.showGif} /> :
          <Eye id="navBarGif" onClick={props.showGif} />
        }
        <a href="https://github.com/Dumpling-Squad/nav-bar">
          <img src="/github.png" width="25px"/>
        </a>
      </div>
    </div>
  </div>
);

export default Applications;