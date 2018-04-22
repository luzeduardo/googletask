import React, { Component } from 'react'
// import 'App.css'
// import logo from 'logo.svg'

class Base extends Component {
  render () {
    console.log('asdasdsdad')
    return (
      <div className="auth">
        <header className="auth__header">
          {/* <img alt="Tasks" src={logo} /> */}
          <p className="auth__header__intro">Personal Tasks</p>
        </header>
        <div className="auth__body">
          {this.props.children}
        </div>
      </div>
    )
  }
}

export default Base
