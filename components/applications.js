import Eye from '../public/eye.js';
import Closed from '../public/closed.js';
import Github from '../public/github.js';
import NutrificCarousel from './nutrificCarousel.js';

const Applications = (props) => {

  return (
    <div className="applications">
      <h1>
        applications
      </h1>
      <div className="project">
        {props.nutrific && <NutrificCarousel />}
        <div className="project-desc">
          <h2>Nutrific</h2>
          <p>A health-conscious phone application that calculates your BMI, BMR, and calorie expenditure according to your physical fitness. The application also lets you log what you eat and calculates how many calories you need to meet your weight maintenance goals, on the daily journal. <br></br><br></br>
          The application is built in Javascript, React Native, Redux for a fluid user experience. User information is stored in Google Firebase Realtime Database and Authentication using email and password verification. </p>
          <div className="project-tools">Google FireBase - Redux - React Native - Expo</div>
        </div>
        <div className="project-links">
          {props.nutrific ?
            <Closed id="nutrific" showGif={props.showGif} fill={props.color}/> :
            <Eye id="nutrific" showGif={props.showGif} fill={props.color}/>
          }
          <a href="https://github.com/nutrific/nutrific-client">
            <Github />
          </a>
        </div>
      </div>

      <div className="project">
        {props.knowItAllGif &&
        <a className="project-img">
          <img src="/knowitall.gif" width="200px"/>
        </a>}
        <div className="project-desc">
          <h2>Know It All Application</h2>
          <p>A trivia game application that could be played on iOS or Android, meant to be played locally. Built in React Native, players can choose their team name, color, and the category they want to test their knowledge on.
          </p>
          <div className="project-tools">React Native - Expo</div>
        </div>
        <div className="project-links">
          {props.knowItAllGif ?
            <Closed id="knowItAllGif" showGif={props.showGif} fill={props.color}/> :
            <Eye id="knowItAllGif" showGif={props.showGif} fill={props.color}/>
          }
          <a href="https://github.com/know-it-alls">
            <Github />
          </a>
        </div>
      </div>

      <div className="project">
        <div className="project-desc">
          <h2>Alo Yoga Mock (System Design)</h2>
          <p>I inherited a team members application (a carousel of products) with a focus on improving the backend. With an initial throughput of 8 requests per second (rps), I set a goal to have the service handle 1000 rps. The backend was built with MongoDB and I wanted to compare the same service but with a SQL database (PostgreSQL). After seeding and indexing the databases with 10 million products, I monitored the services with New Relic, stress testing with k6. The PostgreSQL database was handling more at 244 rps so I decided to move forward with the SQL database. I deployed the database and the service to an AWS EC2 instance; stress tested with loader.io. The service handled up to 594 rps with a stress test configured at 1000 clients sending a request every second for 1 minute. I decided to horizontally scale the service and deployed another instance of the service and a load balancer proxy (nginx). Once deployed and tested, the goal of 1000 rps was achieved; with a 0% error rate and 68ms latency.</p>
          <div className="project-tools">JavaScript - PostgreSQL - AWS</div>
        </div>
        <div className="project-links">
          <a href="https://github.com/Dumplings-Reloaded/related-items">
            <Github />
          </a>
        </div>
      </div>

      <div className="project">
        {props.navBarGif &&
        <a className="project-img">
          <img src="/navbar.gif"/>
        </a>}

        <div className="project-desc">
          <h2>Glossier Mock (Front End Focused)</h2>
          <p>Teaming up with three other engineers, we recreated an item detail page mocking that of Glossier. Aside from creating a simple Express.js server and a MySQL database seeded from my AWS S3 bucket that held mock products; this application was focused heavily on the front-end. I chose to recreate the navigation bar because I wanted to challenge myself in solving the search function within the navigation bar. Glossier's search tab would filter the products upon the user's key press. This was achieved by sending the state of the search form to the back-end; querying the database at each keystroke. As for the best seller tabs, I designed the application to send a get request at the onHover of each tab to the corresponding category of makeup.</p>
          <div className="project-tools">JavaScript - MySQL - Express - AWS - HTML - CSS</div>
        </div>
        <div className="project-links">
          {props.navBarGif ?
            <Closed id="navBarGif" showGif={props.showGif} fill={props.color}/> :
            <Eye id="navBarGif" showGif={props.showGif} fill={props.color}/>
          }
          <a href="https://github.com/Dumpling-Squad/nav-bar">
            <Github />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Applications;