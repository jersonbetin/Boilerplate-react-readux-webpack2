import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from './store/configureStore'
import Root from './containers/Root'
import './styles/style'

const history = syncHistoryWithStore(browserHistory, store)

render(
  <AppContainer>
  <Root store={store} history={history} />
  </AppContainer>,
  document.getElementById('root')
)


if(module.hot) { 
  module.hot.accept('./containers/Root', () => { 

    const orgError = console.error // eslint-disable-line no-console
    console.error = (...args) => { // eslint-disable-line no-console
      if (args && args.length === 1 && args[0].indexOf('You cannot change <Router routes>;') > -1) {
        // React route changed
      } else {
        // Log the error as normally
        orgError.apply(console, args)
      }
    }
    const NewRoot = require('./containers/Root').default
    render(
      <AppContainer>
        <NewRoot store={store} history={history} />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}

