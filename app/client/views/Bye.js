import React from 'react'
import Button from '../components/Buttons/Button'

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
      <div>
        <Button onClick={this.onClick.bind(this)}>Increment</Button>
        <span>{this.state.count}</span>
      </div>
    )
  }
}
