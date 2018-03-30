import * as newActions from '../actions/newAction'

const defaultState = {
  news: [],
  isFetching: false,
  isFail: false,
  isSuccess: false,
  selectedPageId: 1,
  errorMsg: '',
  windowWidth: 0,
}

const newsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case newActions.FETCH_NEWS:
      return {
        ...state,
        isFetching: true,
        isFail: false,
        isSuccess: false,
        errorMsg: '',
      }
    case newActions.FETCH_NEWS_FAIL:
      return {
        ...state,
        isFetching: false,
        isFail: true,
        isSuccess: false,
        errorMsg: action.errorMsg,
      }
    case newActions.FETCH_NEWS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        isFail: false,
        isSuccess: true,
        news: action.news,
        errorMsg: '',
      }
    case newActions.CHANGE_PAGE_ID:
      return {
        ...state,
        selectedPageId: action.selectedPageId,
      }
    case newActions.SET_WINDOW_WIDTH:
      return {
        ...state,
        windowWidth: action.windowWidth,
      }
    default:
      return state
  }
}

export default newsReducer
