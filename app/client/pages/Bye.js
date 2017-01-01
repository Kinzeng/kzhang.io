import React from 'react'

const containerStyle = {
  height: '100%',
  width: '100%',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center'
}

export default class Bye extends React.Component {
  constructor (props) {
    super(props)
    this.state = {count: 0}
  }

  onClick () {
    this.setState({count: this.state.count + 1})
  }

  render () {
    return (
      <div style={containerStyle}>
        Bye
      </div>
    )
  }
}
