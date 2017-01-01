import React from 'react'
import DOM from 'react-dom'
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

const viewProps = {
  style: {
    margin: '0% 5%'
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

  scroll (page) {
    scroll(DOM.findDOMNode(this.pageRefs[page]))
  }

  render () {
    const pageViews = pages.map((page, i) => {
      const pageProps = {
        ref: (ref) => { this.pageRefs[i] = ref },
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
