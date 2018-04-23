import React from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'
import Private from 'src/components/container/Private'
import TasksPage from 'src/components/container/TasksPage'
import LoginPage from 'src/components/container/LoginPage'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={LoginPage} />
          <Route exact path='/login' component={LoginPage} />
          <Private exact path='/tasks' component={TasksPage}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

export default App
