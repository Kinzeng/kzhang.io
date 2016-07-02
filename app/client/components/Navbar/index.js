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
    left: '12.5%',
    backgroundColor: 'gray'
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
  render () {
    let navbarStyle = this.props.fixed ? navbarProps.fixedStyle : navbarProps.defaultStyle

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
