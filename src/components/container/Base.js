import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { doLogoff } from 'src/actions/index'

class Base extends Component {
  constructor (props) {
    super(props)
    this.takeOff = this.takeOff.bind(this)
  }

  takeOff () {
    this.props.doLogoff()
  }

  render () {
    console.log(this.props)
    return (
      <div className="auth">
        <header className="auth__header">
          <p className="auth__header__intro">Personal Tasks</p>
          <button type="button" onClick={this.takeOff}>Logoff!</button>
        </header>
        <div className="auth__body">
          {this.props.children}
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      doLogoff
    },
    dispatch
  )

export default (connect(null, mapDispatchToProps)(Base))
