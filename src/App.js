import React from 'react'
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom'
import Private from 'src/components/container/Private'
import TasksPage from 'src/components/container/TasksPage'
import LoginPage from 'src/components/container/LoginPage'
import NoMatch from 'src/components/container/NoMatch'

class App extends React.Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/login' component={LoginPage} />
          <Private exact path='/tasks' component={TasksPage}/>
          <Route component={NoMatch} />
        </Switch>
      </Router>
    )
  }
}

export default App
