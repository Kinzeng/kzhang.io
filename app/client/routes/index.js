
import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from '../containers/App'
import Home from '../components/Home'
import Bye from '../components/Bye'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/bye' component={Bye} />
    </Route>
  </Router>
)
