import React, { Component } from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router'
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
    // if (!this.props.user.usertoken) {
    //   return <Redirect to='/login' />
    // }

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
const mapStateToProps = state => ({
  user: state.userReducer
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      doLogoff
    },
    dispatch
  )

export default (connect(mapStateToProps, mapDispatchToProps)(Base))
