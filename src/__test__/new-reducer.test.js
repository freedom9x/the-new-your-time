import * as actions from '../actions/newAction'
import newsReducer, { defaultState } from '../reducers/newsReducer'

describe('Test news reducers', () => {
  const initialState = { ...defaultState }
  test('Should return the default state', () => {
    expect(newsReducer(undefined, {})).toEqual(initialState)
  })

  test('Should return a getting new list successful state', () => {
    expect(newsReducer(undefined, {})).toEqual(initialState)
    const action = {
      type: actions.FETCH_NEWS_SUCCESS,
      news: [],
    }
    const expectedState = {
      ...initialState,
      isFetching: false,
      isFail: false,
      isSuccess: true,
      news: action.news,
      errorMsg: '',
    }
    expect(newsReducer(initialState, action)).toEqual(expectedState)
  })

  test('Should return a getting new list failed state', () => {
    expect(newsReducer(undefined, {})).toEqual(initialState)
    const errorMsg = 'error message'
    const action = {
      type: actions.FETCH_NEWS_FAIL,
      errorMsg,
    }
    const expectedState = {
      ...initialState,
      isFetching: false,
      isFail: true,
      isSuccess: false,
      errorMsg,
    }
    expect(newsReducer(initialState, action)).toEqual(expectedState)
  })

  test('Should return a changed page id state', () => {
    expect(newsReducer(undefined, {})).toEqual(initialState)
    const selectedPageId = 1
    const action = {
      type: actions.CHANGE_PAGE_ID,
      selectedPageId,
    }
    const expectedState = {
      ...initialState,
      selectedPageId,
    }
    expect(newsReducer(initialState, action)).toEqual(expectedState)
  })
})
