import React from 'react'
import Navbar from '../components/Navbar'
import {HEADER_HEIGHT} from '../constants'

const appProps = {
  style: {
    height: '100%', // Firefox
    minHeight: '100%', // Safari
    width: '100%',
    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between', // header and footer at the extremes
    alignItems: 'stretch',
    backgroundColor: 'rgba(255, 255, 255, 0)', // placeholder
    fontFamily: 'sans-serif'
  }
}

const headerProps = {
  style: {
    width: '100%',
    minHeight: HEADER_HEIGHT, // keep view under navbar
    textAlign: 'center', // align the image to the center
    alignSelf: 'center'
  }
}

const imageProps = {
  style: {
    height: '100px',
    width: '100px',
    borderRadius: '100%'
  },
  src: 'https://lh3.googleusercontent.com/-HCpqSkPmnNY/AAAAAAAAAAI/AAAAAAAAAAo/Z69759Z5s5s/s160-c-k-no/photo.jpg'
}

const viewProps = {
  style: {
    margin: '0% 5%'
  }
}

const footerProps = {
  style: {
    alignSelf: 'center'
  }
}

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {fixed: false}
  }

  componentDidMount () {
    this.setState({scroll: window.scrollY})
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll (event) {
    this.setState({fixed: window.scrollY >= 100})
  }

  render () {
    return (
      <div {...appProps}>
        <div {...headerProps}>
          <img {...imageProps} />
          <Navbar fixed={this.state.fixed} />
        </div>

        <div {...viewProps}>
          {this.props.children}
        </div>

        <div {...footerProps}>Footer</div>
      </div>
    )
  }
}
