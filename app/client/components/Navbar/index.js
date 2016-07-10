import React from 'react'
import Button from '../Buttons/Button'
import NavButtons from './Navbuttons'
import {NAV_WIDTH, NAV_FIXED_WIDTH, NAV_FIXED_LEFT} from '../../constants'

const navbarProps = {
  defaultStyle: {
    width: NAV_WIDTH,
    display: 'flex',
    justifyContent: 'space-between',
    margin: 'auto',
    backgroundColor: 'lightgray'
  },
  fixedStyle: { // when the user scrolls past the navbar, fix it to the top
    width: NAV_FIXED_WIDTH,
    display: 'flex',
    justifyContent: 'space-between',
    position: 'fixed',
    top: '0%',
    left: NAV_FIXED_LEFT,
    backgroundColor: 'gray'
  }
}

const homeProps = {
  style: {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-start',
    fontWeight: 'bold'
  }
}

const navProps = {
  style: {
    width: '50%',
    display: 'flex',
    justifyContent: 'flex-end'
  }
}

const buttonStyle = {
  fontSize: '1em' // placeholder
}

export default class Navbar extends React.Component {
  render () {
    let navbarStyle = this.props.fixed ? navbarProps.fixedStyle : navbarProps.defaultStyle

    return (
      <div style={navbarStyle}>
        <div {...homeProps}>
          <Button link='/' style={buttonStyle}>Kevin Zhang</Button>
        </div>

        <NavButtons {...navProps}>
          <Button link='/counter' style={buttonStyle}>Counter</Button>
          <Button link='/bye' style={buttonStyle}>Bye</Button>
        </NavButtons>
      </div>
    )
  }
}
