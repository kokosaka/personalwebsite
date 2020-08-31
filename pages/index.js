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
      }), 2750)
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
    return (
      this.state.isLoading ?
      <Loading /> :
      <Layout>
        <div className="home">
          {new Date().toLocaleTimeString('en-GB') < '12' ? 'good morning' : new Date().toLocaleTimeString('en-GB') < '18' ? 'good afternoon' : 'good evening' }
          <button className='scroll-button' id="firstRef" onClick={this.scrollToRef}>whoami</button>
        </div>
        <div ref={this.firstRef}>
          <Bio scrollToRef={this.scrollToRef}/>
        </div>
        <div ref={this.secondRef} >
          <Applications knowItAllGif={this.state.knowItAllGif} navBarGif={this.state.navBarGif} showGif={this.showGif}/>
        </div>
        <Footer />
      </Layout>
    )
  }
}

export default Index;