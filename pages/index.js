import Layout from '../components/layout';
import Link from 'next/link';
import Footer from '../components/footer';
import Bio from '../components/bio';
// import Loading from '../components/loading';
import Applications from '../components/applications';
import Falling from '../public/falling';
import FallingTwo from '../public/fallingTwo';
import FallingThree from '../public/fallingThree';


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // isLoading: true,
      knowItAllGif: false,
      navBarGif: false,
      nutrific: false,
    }
    this.firstRef = React.createRef()
    this.secondRef = React.createRef()
    this.fallMount = null;
    this.scrollToRef = this.scrollToRef.bind(this)
    this.showGif = this.showGif.bind(this)
    this.setfallMount = this.setFallMount.bind(this)
    this.moveFalling = this.moveFalling.bind(this)
  }

  componentDidMount() {
    // setTimeout(() =>
    //   this.setState({
    //     isLoading: false
    //   }), 3000)
    document.addEventListener('scroll', this.moveFalling)
  }

  setFallMount = element => {
    this.fallMount = element;
  }

  moveFalling() {
    let currScroll = window.scrollY;
    if(this.fallMount) {
      document.getElementById('falling').style.marginTop = currScroll*0.5
      document.getElementById('fallingTwo').style.marginTop = currScroll*0.7
      document.getElementById('fallingThree').style.marginTop = currScroll*0.9
    }
  }

  scrollToRef(e) {
    var id = e.target.id;
    this.[id].current.scrollIntoView({
      behavior: 'smooth'
    })
  }

  showGif(e) {
    this.setState({
      [e.target.id]: !this.state.[e.target.id]
    })
  }

  render() {
  var socialColor = "rgb(219, 214, 214)";
  // var loadingColor = "rgb(137,56,49)"

    return (
      // this.state.isLoading ?
      // <Loading color={loadingColor}/> :
      <Layout scrollToRef={this.scrollToRef} >
        <div className="falling-back" ref={this.setFallMount}>
          <FallingThree />
          <Falling />
          <FallingTwo />
        </div>
        <div className="home">
          {new Date().toLocaleTimeString('en-GB') < '12' ? 'good morning' : new Date().toLocaleTimeString('en-GB') < '18' ? 'good afternoon' : 'good evening' }
          <button className='scroll-button' id="firstRef" onClick={this.scrollToRef}>whoami</button>
        </div>
        <div ref={this.firstRef}>
          <Bio scrollToRef={this.scrollToRef}/>
        </div>
        <div ref={this.secondRef} >
          <Applications knowItAllGif={this.state.knowItAllGif} navBarGif={this.state.navBarGif} nutrific={this.state.nutrific} showGif={this.showGif} color={socialColor}/>
        </div>
        <Footer />
      </Layout>
    )
  }
}

export default Index;