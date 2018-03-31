import * as actions from '../actions/newAction'

describe('Test some actions fetch new list', () => {
  test('Fetch new list success', () => {
    const expectedAction = {
      type: actions.FETCH_NEWS_SUCCESS,
      news: [],
    }
    expect(actions.fetchNewListSuccess([])).toEqual(expectedAction)
  })
  test('Should return new list failed action', () => {
    const errorMsg = 'error message'
    const expectedAction = {
      type: actions.FETCH_NEWS_FAIL,
      errorMsg,
    }
    expect(actions.fetchNewListFail(errorMsg)).toEqual(expectedAction)
  })
  test('Should return select new item action', () => {
    const expectedAction = {
      type: actions.SET_SELECTED_NEW_ID,
      selectedNewId: 1,
    }
    expect(actions.selectNew(1)).toEqual(expectedAction)
  })
  test('Should return change page action', () => {
    const expectedAction = {
      type: actions.CHANGE_PAGE_ID,
      selectedPageId: 1,
    }
    expect(actions.changePageId(1)).toEqual(expectedAction)
  })
})
