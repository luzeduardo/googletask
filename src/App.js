import React from 'react'
import { Switch, HashRouter, Route } from 'react-router-dom'
import Private from 'src/components/container/Private'
import TasksPage from 'src/components/container/TasksPage'

import LoginPage from 'src/components/container/LoginPage'

class App extends React.Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/login' component={LoginPage} />
          <Private exact path='/tasks' component={TasksPage}/>
          {/* <Route component={NotFound} /> */}
        </Switch>
      </HashRouter>
    )
  }
}

export default App
