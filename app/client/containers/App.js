import React from 'react'
import {findDOMNode} from 'react-dom'
import scroll from 'smoothscroll'
import Navbar from '../components/Navbar'
import pages from '../pages'
import {VIEWPORT_HEIGHT} from '../constants'

const appProps = {
  style: {
    position: 'relative',
    minHeight: '100%',
    minWidth: '1100px',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0)', // placeholder

    display: 'flex',
    flexFlow: 'column nowrap',
    justifyContent: 'space-between', // header and footer at the extremes
    alignItems: 'stretch'
  }
}

export default class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {fixed: false}
    this.pageRefs = []
    this.backgrounds = []
  }

  componentDidMount () {
    this.setState({scroll: window.scrollY})
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll (event) {
    const pageOffset = window.scrollY / VIEWPORT_HEIGHT
    this.setState({
      fixed: window.scrollY >= VIEWPORT_HEIGHT,
      background: this.backgrounds[Math.trunc(pageOffset)] // change to current page's background
    })

    // change body color to the page that's mostly on the screen
    document.body.style.backgroundColor = this.backgrounds[Math.round(pageOffset)]
  }

  scroll (page, duration = 500) {
    scroll(findDOMNode(this.pageRefs[page]), duration)
  }

  render () {
    const navProps = {
      fixed: this.state.fixed,
      scroll: this.scroll.bind(this),
      background: this.state.background
    }

    const pageViews = pages.map((page, i) => {
      const pageProps = {
        ref: (ref) => { this.pageRefs[i] = ref },
        scroll: this.scroll.bind(this),
        key: i
      }

      this.backgrounds[i] = page.background

      return React.cloneElement(page.component, pageProps)
    })

    return (
      <div {...appProps}>
        <Navbar {...navProps} />
        {pageViews}
      </div>
    )
  }
}
