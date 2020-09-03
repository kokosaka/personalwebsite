import Mail from '../public/mail.js'
import Github from '../public/github.js'
import Linkedin from '../public/linkedin.js'

const Social = () => {
  var color = "rgb(92,94,181)";
  var linkedIn = "rgb(1, 116, 179)"

  return (
    <div className="social-links">
      <a className="link-icon" href="https://www.linkedin.com/in/kokosaka/">
        <Linkedin fill={linkedIn}/>
      </a>
      <a className="link-icon" href="https://github.com/kokosaka">
        <Github />
      </a>
      <a className="link-icon" href="mailto:kobohkosaka@gmail.com">
        <Mail fill={color}/>
      </a>
    </div>
  );
}

export default Social;