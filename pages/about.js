import Layout from '../components/layout';

const About = () => (
  <Layout>
    <div className="info-body">
      <h1>
        About Me
      </h1>
      <h2>
        A little about myself
      </h2>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/kokosaka/">
          <img src="/linkedin.png" width="50px"/>
        </a>
        <a href="https://github.com/kokosaka">
          <img src="/github.png" width="50px"/>
        </a>
      </div>
    </div>
  </Layout>
)

export default About;