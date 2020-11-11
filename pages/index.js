import Layout from '../components/layout';
import Link from 'next/link';
import Footer from '../components/footer';
import Bio from '../components/bio';
import Loading from '../components/loading';
import Applications from '../components/applications';


class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    }
    this.firstRef = React.createRef()
    this.secondRef = React.createRef()
    this.scrollToRef = this.scrollToRef.bind(this)
    this.showGif = this.showGif.bind(this)
  }

  componentDidMount() {
    setTimeout(() =>
      this.setState({
        isLoading: false
      }), 3000)
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
  var loadingColor = "rgb(137,56,49)"

    return (
      this.state.isLoading ?
      <Loading color={loadingColor}/> :
      <Layout scrollToRef={this.scrollToRef} >
        <div className="home">
          {new Date().toLocaleTimeString('en-GB') < '12' ? 'good morning' : new Date().toLocaleTimeString('en-GB') < '18' ? 'good afternoon' : 'good evening' }
          <button className='scroll-button' id="firstRef" onClick={this.scrollToRef}>whoami</button>
        </div>
        <div ref={this.firstRef}>
          <Bio scrollToRef={this.scrollToRef}/>
        </div>
        <div ref={this.secondRef} >
          <Applications knowItAllGif={this.state.knowItAllGif} navBarGif={this.state.navBarGif} showGif={this.showGif} color={socialColor}/>
        </div>
        <Footer />
      </Layout>
    )
  }
}

export default Index;