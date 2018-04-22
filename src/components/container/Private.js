import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect, withRouter } from 'react-router'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import Base from 'src/components/container/Base'

const Private = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    props && props.location && props.location.state && props.location.state.usertoken ? (
      <Base>
        <Component {...props}/>
      </Base>
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

export default  withRouter(Private)
