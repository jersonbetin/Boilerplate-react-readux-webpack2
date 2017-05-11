import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import App from './components/index'
import './styles/style'

const render2 = Component => {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  )
}

render2(App)

if(module.hot) module.hot.accept('./components/index', () => { render2(App) })