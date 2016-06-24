import React from 'react'
import {render} from 'react-dom'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from './containers/App'
import Hello from './components/Hello'
import Bye from './components/Bye'

class Root extends React.Component {
  render () {
    return (
      <Router history={browserHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Hello} />
          <Route path='/bye' component={Bye} />
        </Route>
      </Router>
    )
  }
}

render(<Root />, document.getElementById('app'))
