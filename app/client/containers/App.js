import React from 'react'
import {Link} from 'react-router'

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div id='app'>
        <div id='toolbar'>
          Toolbar
          <Link to='/'>Hello</Link>
          <Link to='/bye'>Bye</Link>
        </div>
        <div>{this.props.children}</div>
        <div>Footer</div>
      </div>
    )
  }
}
