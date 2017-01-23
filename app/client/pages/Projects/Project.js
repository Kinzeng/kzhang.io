import React from 'react'

const containerStyle = {
  margin: '1em',
  marginTop: 0,
  padding: '1.5em 0',
  flex: '1 1 auto',
  border: '1px solid transparent',
  color: 'white',
  textDecoration: 'none',
  transition: 'border 0.25s linear',
  cursor: 'pointer',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center'
}

const hoverStyle = {
  ...containerStyle,
  border: '1px solid white'
}

export default class Project extends React.Component {
  constructor (props) {
    super(props)
    this.state = {hover: false}
  }

  render () {
    const containerProps = {
      style: this.props.active ? hoverStyle : containerStyle,
      onMouseEnter: this.props.hover.bind(null),
      // onMouseLeave: this.props.unhover.bind(null),
      target: '_blank',
      href: this.props.url
    }

    return (
      <a {...containerProps}>
        {this.props.title}
      </a>
    )
  }
}
