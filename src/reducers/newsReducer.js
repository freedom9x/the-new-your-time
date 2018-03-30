import * as newActions from '../actions/newAction'

const defaultState = {
  news: [],
  isFetching: false,
  isFail: false,
  isSuccess: false,
}

const newsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case newActions.FETCH_NEWS:
      return {
        ...state,
        isFetching: true,
        isFail: false,
        isSuccess: false,
      }
    case newActions.FETCH_NEWS_FAIL:
      return {
        ...state,
        isFetching: false,
        isFail: true,
        isSuccess: false,
      }
    case newActions.FETCH_NEWS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFail: false,
        isSuccess: true,
        news: action.news,
      }
    default:
      return state
  }
}

export default newsReducer
