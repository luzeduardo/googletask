import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect, withRouter } from 'react-router'
import { reactLocalStorage } from 'reactjs-localstorage'
import Base from 'src/components/container/Base'

const Private = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    reactLocalStorage.get('usertoken') ? (
      <Base>
        <Component {...props}/>
      </Base>
    ) : (
      <Redirect to={{
        pathname: '/login'
      }}/>
    )
  )}/>
)

export default withRouter(Private)
