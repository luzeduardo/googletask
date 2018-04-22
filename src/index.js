import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import 'public/main.css'
import App from './App'

import configureStore from './store'
const store = configureStore()

class GeneralErrorBoundary extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      hasError: false
    }
  }

  componentDidCatch (error, info) {
    this.setState({
      hasError: true
    })
  }

  render () {
    if (this.state.hasError) {
      return <div>Ooopsss! Something is wrong!</div>
    } else {
      return this.props.children
    }
  }
}

const Root = () => {
  return (
    <Provider store={store}>
      <GeneralErrorBoundary>
        <App />
      </GeneralErrorBoundary>
    </Provider>
  )
}
ReactDOM.render(
  <Root />,
  document.getElementById('app')
)
