import React from 'react'

class Task extends React.Component {
  render () {
    return (
      <div>{this.props.children}</div>
    )
  }
}

export default Task
