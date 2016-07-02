import React from 'react'
// import ExecutionEnvironment from 'fbjs/lib/ExecutionEnvironment'
import Button from '../Buttons/Button'

const navbarProps = {
  defaultStyle: {
    width: '100%',
    display: 'block'
  },
  fixedStyle: {
    width: '75%',
    display: 'block',
    position: 'fixed',
    top: '0px',
    left: '12.5%'
  }
}

const homeProps = {
  style: {
    float: 'left'
  }
}

const navProps = {
  style: {
    float: 'right'
  }
}

export default class Navbar extends React.Component {
  constructor (props) {
    super(props)
    this.state = {scroll: 0}
  }

  componentDidMount () {
    this.setState({scroll: window.scrollY})
    window.addEventListener('scroll', this.handleScroll.bind(this))
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.handleScroll.bind(this))
  }

  handleScroll () {
    this.setState({scroll: window.scrollY})
  }

  render () {
    let navbarStyle = this.state.scroll > 100 ? navbarProps.fixedStyle : navbarProps.defaultStyle

    return (
      <div {...navbarProps} style={navbarStyle}>
        <div {...homeProps}>
          <Button label='Kevin Zhang' link='/' />
        </div>

        <div {...navProps}>
          <Button label='Bye' link='/bye' />
        </div>
      </div>
    )
  }
}
