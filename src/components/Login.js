import React from 'react'
import {connect} from 'react-redux'
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { bindActionCreators } from 'redux'

class Login extends React.Component {
  render () {
    return (
      <div>
        {!this.props.usertoken && <GoogleLogin
          clientId={'765601987916-0n6c7hdtrikibv8hfr9fv9b7j7oofgnp.apps.googleusercontent.com'}
          scope="https://www.googleapis.com/auth/tasks"
          buttonText="Login"
          onSuccess={this.props.take}
          onFailure={this.props.takeError}
        />
        }
        {this.props.usertoken && <GoogleLogout
          clientId={'765601987916-0n6c7hdtrikibv8hfr9fv9b7j7oofgnp.apps.googleusercontent.com'}
          buttonText="Logout"
          onLogoutSuccess={this.props.takeOff}>
        </GoogleLogout>
        }
      </div>
    )
  }
}

Login.defaultProps = {
  usertoken: null
}

const mapStateToProps = state => ({
  usertoken: state.userReducer.usertoken
})

export default (connect(mapStateToProps, {})(Login))
