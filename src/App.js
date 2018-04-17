import React from 'react'

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
class App extends React.Component {
  constructor (props) {
    super(props)
    this.changeParentState = this.changeParentState.bind(this)

    this.state = {
      changes: 0
    }
  }

  changeParentState () {
    this.setState({
      changes: this.state.changes + 1
    })
  }

  render () {
    return (
      <div>
        <GeneralErrorBoundary>
          <div />
        </GeneralErrorBoundary>
      </div>
    )
  }
}

export default App
