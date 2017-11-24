import React from 'react'

const NUM_PER_ROW = 3
const MARGIN = 2.5

const containerStyle = {
  boxSizing: 'border-box', // account for the 1px border
  margin: `${MARGIN}%`,
  marginTop: 0,
  padding: '1.5em 0',
  width: `${(100 - (NUM_PER_ROW * 2 * MARGIN)) / NUM_PER_ROW}%`, // calculate width to fit on a line
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
      target: '_blank'
    }

    if (this.props.url) {
        containerProps.href = this.props.url
    }

    return (
      <a {...containerProps}>
        {this.props.title}
      </a>
    )
  }
}
