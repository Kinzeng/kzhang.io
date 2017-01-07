import React from 'react'
import {findDOMNode} from 'react-dom'
import scroll from 'smoothscroll'
import Navbar from '../components/Navbar'
import Page from './Page'
import pages from '../pages'
import {VIEWPORT_HEIGHT} from '../constants'

const appProps = {
  style: {
    position: 'relative',
    minHeight: '100%',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0)', // placeholder
    fontFamily: 'sans-serif',

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
  }

  componentDidMount () {
    this.setState({scroll: window.scrollY})
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll (event) {
    this.setState({fixed: window.scrollY >= VIEWPORT_HEIGHT})
  }

  scroll (page, duration = 500) {
    scroll(findDOMNode(this.pageRefs[page]), duration)
  }

  render () {
    const pageViews = pages.map((page, i) => {
      const pageProps = {
        ref: (ref) => { this.pageRefs[i] = ref },
        scroll: this.scroll.bind(this),
        key: i
      }

      return <Page {...pageProps}>{page}</Page>
    })

    return (
      <div {...appProps}>
        <Navbar fixed={this.state.fixed} scroll={this.scroll.bind(this)} />
        {pageViews}
      </div>
    )
  }
}
