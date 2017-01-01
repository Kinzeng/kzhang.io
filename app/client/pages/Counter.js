import React from 'react'
import Button from '../components/Buttons/Button'

const containerStyle = {
  height: '100%',
  width: '100%',
  backgroundColor: 'black',
  color: 'white',

  display: 'flex',
  flexFlow: 'column nowrap',
  justifyContent: 'center',
  alignItems: 'center'
}

export default class Counter extends React.Component {
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
        <Button style={{color: 'white'}} onClick={this.onClick.bind(this)}>Increment</Button>
        <span>{this.state.count}</span>
      </div>
    )
  }
}
