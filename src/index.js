import React from 'react'
import ReactDOM from 'react-dom'
import 'public/main.css'
import App from './App'

const Root = () => {
  return (
      <App />
  )
}
ReactDOM.render(
  <Root />,
  document.getElementById('app')
)
