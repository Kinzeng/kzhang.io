import React from 'react'
import Button from '../Buttons/Button'
import {NAV_WIDTH, NAV_LEFT, NAV_CONTENT_PADDING} from '../../constants'

const defaultStyle = {
  position: 'absolute',
  top: 0,
  left: NAV_LEFT,
  margin: 'auto',
  padding: `20px ${NAV_CONTENT_PADDING}`,
  width: NAV_WIDTH,
  opacity: 0,
  animation: 'fadeInDown 0.75s ease-out 1s forwards',
  transition: 'background-color 0.25s',

  display: 'flex',
  justifyContent: 'space-between'
}

const fixedStyle = {
  ...defaultStyle,
  position: 'fixed'
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
  color: 'white'
}

export default class Navbar extends React.Component {
  render () {
    let containerStyle = !this.props.fixed ? defaultStyle : {
      ...fixedStyle,
      backgroundColor: this.props.background
    }

    return (
      <div style={containerStyle}>
        <div style={homeStyle}>
          <Button onClick={this.props.scroll.bind(null, 0, 500)} style={buttonStyle}>Kevin Zhang</Button>
        </div>

        <div style={navStyle}>
          <Button onClick={this.props.scroll.bind(null, 1, 500)} style={buttonStyle}>About</Button>
          <Button onClick={this.props.scroll.bind(null, 2, 500)} style={buttonStyle}>Projects</Button>
          <Button onClick={this.props.scroll.bind(null, 3, 500)} style={buttonStyle}>Skills</Button>
        </div>
      </div>
    )
  }
}
