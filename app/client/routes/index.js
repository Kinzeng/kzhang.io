import React from 'react'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import App from '../containers/App'

import Counter from '../views/Counter'
import Home from '../views/Home'
import Bye from '../views/Bye'

export default (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='/counter' component={Counter} />
      <Route path='/bye' component={Bye} />
    </Route>
  </Router>
)
