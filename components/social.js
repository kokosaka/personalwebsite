import Mail from '../public/mail.js'
import Github from '../public/github.js'
import Linkedin from '../public/linkedin.js'

const Social = () => {
  var color = "#006816";

  return (
    <div className="social-links">
      <a className="link-icon" href="https://www.linkedin.com/in/kokosaka/">
        <Linkedin fill={color}/>
      </a>
      <a className="link-icon" href="https://github.com/kokosaka">
        <Github fill={color}/>
      </a>
      <a className="link-icon" href="mailto:kobohkosaka@gmail.com">
        <Mail fill={color}/>
      </a>
    </div>
  );
}

export default Social;