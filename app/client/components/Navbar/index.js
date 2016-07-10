import React from 'react'
import Button from '../Buttons/Button'

const navbarProps = {
  defaultStyle: {
    width: '75%',
    display: 'block',
    margin: 'auto'
  },
  fixedStyle: { // when the user scrolls past the navbar, fix it to the top
    width: '56.25%',
    display: 'block',
    position: 'fixed',
    top: '0%',
    left: '21.875%',
    backgroundColor: 'gray'
  }
}

const homeProps = {
  style: {
    float: 'left',
    fontWeight: 'bold'
  }
}

const navProps = {
  style: {
    float: 'right'
  }
}

const buttonStyle = {
  fontSize: '1em' // placeholder
}

export default class Navbar extends React.Component {
  render () {
    let navbarStyle = this.props.fixed ? navbarProps.fixedStyle : navbarProps.defaultStyle

    return (
      <div {...navbarProps} style={navbarStyle}>
        <div {...homeProps}>
          <Button label='Kevin Zhang' link='/' style={buttonStyle} />
        </div>

        <div {...navProps}>
          <Button label='Bye' link='/bye' style={buttonStyle} />
        </div>
      </div>
    )
  }
}
