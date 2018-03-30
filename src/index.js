import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n'
import React from 'react'
import ReactDOM from 'react-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import HomeContainer from './containers/HomeContainer'
import reducers from './reducers/reducers'
import translationsObject from './locales/i18n'


import './styles/app.css'

let middleware = [thunkMiddleware]
const logger = createLogger({
  diff: true,
  duration: true,
  collapsed: true,
})
if (process.env.NODE_ENV !== 'production') {
  middleware = [
    ...middleware,
    logger,
  ]
}
const store = createStore(reducers, applyMiddleware(...middleware))
syncTranslationWithStore(store)
store.dispatch(loadTranslations(translationsObject))
store.dispatch(setLocale('en'))

ReactDOM.render(
  <MuiThemeProvider>
    <Provider store={store}>
      <HomeContainer title="NewYorkTime" />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root'),
)
