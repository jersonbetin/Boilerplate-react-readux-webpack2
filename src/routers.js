import React from 'react'
import { Route, IndexRoute } from 'react-router'
import App from './components/index'
import Home from './components/Home/index'

export default (
  <Route path='/' component = {App}>
    <IndexRoute components={Home} />
  </Route>
)
