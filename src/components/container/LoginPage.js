import React from 'react'
import {connect} from 'react-redux'
import { reactLocalStorage } from 'reactjs-localstorage'
import { Redirect } from 'react-router'
import { bindActionCreators } from 'redux'

import Login from 'src/components/Login'
import { doLogin, doLogoff } from 'src/actions/index'

class LoginPage extends React.Component {
  constructor (props) {
    super(props)
    this.take = this.take.bind(this)
  }

  state = {
    stillLogged: reactLocalStorage.get('usertoken')
  }

  take (payload) {
    this.setState({
      stillLogged: payload
    })
    if (this.state.stillLogged) {
      this.props.doLogin(payload)
    }
  }

  render () {
    if (this.state.stillLogged) {
      return <Redirect to='/tasks' />
    }

    return (
      <div>
        <Login take={this.take}/>
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
      doLogin,
      doLogoff
    },
    dispatch
  )

export default (connect(mapStateToProps, mapDispatchToProps)(LoginPage))
