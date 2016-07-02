import React from 'react'
import {Link} from 'react-router'

const buttonProps = {
  style: {
    border: 'none',
    outline: 'none',
    color: 'black',
    textDecoration: 'none',
    backgroundColor: 'clear'
  }
}

const hoverStyle = {
  color: 'rgb(150, 150, 150)'
}

export default class Button extends React.Component {
  constructor (props) {
    super(props)
    this.state = {hover: false}
  }

  onMouseEnter () {
    this.setState({hover: true})
  }

  onMouseLeave () {
    this.setState({hover: false})
  }

  // change style based on props and hover
  calculateStyle () {
    let style = buttonProps.style

    if (this.state.hover) {
      style = {
        ...style,
        ...hoverStyle
      }
    }

    if (this.props.style) {
      style = {
        ...style,
        ...this.props.style
      }
    }

    return style
  }

  render () {
    const style = this.calculateStyle()
    const onMouseEnter = this.onMouseEnter.bind(this)
    const onMouseLeave = this.onMouseLeave.bind(this)
    const props = {style, onMouseEnter, onMouseLeave}

    return (
      <Link to={this.props.link} {...props}>
        {this.props.label}
      </Link>
    )
  }
}
