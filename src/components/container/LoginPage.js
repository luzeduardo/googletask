import React from 'react'
import {connect} from 'react-redux'
import Login from 'src/components/Login'
import { bindActionCreators } from 'redux'
import { doLogin, doLogoff } from 'src/actions/index'
class LoginPage extends React.Component {
  constructor (props) {
    super(props)
    this.take = this.take.bind(this)
  }

  take (payload) {
    this.props.doLogin(payload)
  }

  takeOff (payload) {
    this.props.doLogoff(payload)
  }

  render () {
    return (
      <div>
        <Login take={this.take}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.userReducer.user
})

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      doLogin,
      doLogoff
    },
    dispatch
  )

export default (connect(mapStateToProps, mapDispatchToProps)(LoginPage))
