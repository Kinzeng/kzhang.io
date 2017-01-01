import React from 'react'
import Button from '../Buttons/Button'
import {NAV_WIDTH, NAV_LEFT} from '../../constants'

const navbarStyles = {
  defaultStyle: {
    position: 'absolute',
    top: 0,
    left: NAV_LEFT,
    margin: 'auto',
    width: NAV_WIDTH,
    backgroundColor: 'lightgray',

    display: 'flex',
    justifyContent: 'space-between'
  },
  fixedStyle: { // when the user scrolls past the navbar, fix it to the top
    position: 'fixed',
    top: 0,
    left: NAV_LEFT,
    width: NAV_WIDTH,
    backgroundColor: 'gray',

    display: 'flex',
    justifyContent: 'space-between'
  }
}

const homeStyle = {
  width: '50%',
  fontWeight: 'bold',

  display: 'flex',
  justifyContent: 'flex-start'
}

const navStyle = {
  width: '50%',

  display: 'flex',
  justifyContent: 'flex-end'
}

const buttonStyle = {
  marginLeft: '5%',
  fontSize: '1em' // placeholder
}

export default class Navbar extends React.Component {
  render () {
    const containerStyle = this.props.fixed ? navbarStyles.fixedStyle : navbarStyles.defaultStyle

    return (
      <div style={containerStyle}>
        <div style={homeStyle}>
          <Button onClick={this.props.scroll.bind(null, 0)} style={buttonStyle}>Kevin Zhang</Button>
        </div>

        <div style={navStyle}>
          <Button onClick={this.props.scroll.bind(null, 1)} style={buttonStyle}>Bye</Button>
          <Button onClick={this.props.scroll.bind(null, 2)} style={buttonStyle}>Counter</Button>
        </div>
      </div>
    )
  }
}
