import React from 'react'
import { Route } from 'react-router-dom'
import { Redirect, withRouter } from 'react-router'
import { reactLocalStorage } from 'reactjs-localstorage'
import Base from 'src/components/container/Base'

const logged = reactLocalStorage.get('usertoken')
const Private = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    logged ? (
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
