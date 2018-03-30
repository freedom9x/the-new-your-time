import { combineReducers } from 'redux'
import { i18nReducer } from 'react-redux-i18n'
import newsReducer from './newsReducer'


const Reducers = combineReducers({
  newsReducer,
  i18n: i18nReducer,
})
export default Reducers
