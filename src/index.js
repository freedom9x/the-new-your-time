import { Provider } from 'react-redux'
import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import Home from './components/home'
import reducers from './reducers/reducers'
import './styles/app.css'

const store = createStore(reducers)
ReactDOM.render(
  <Provider store={store}>
    <Home title="HelloWorld" />
  </Provider>,
  document.getElementById('root'),
)
