import Mail from '../public/mail.js'
import Github from '../public/github.js'
import Linkedin from '../public/linkedin.js'

const Social = (props) => (
  <div className="social-links">
    <a className="link-icon" href="https://www.linkedin.com/in/kokosaka/">
      <Linkedin fill={props.linkedIn}/>
    </a>
    <a className="link-icon" href="https://github.com/kokosaka">
      <Github />
    </a>
    <a className="link-icon" href="mailto:kobohkosaka@gmail.com">
      <Mail fill={props.color}/>
    </a>
  </div>
);


export default Social;