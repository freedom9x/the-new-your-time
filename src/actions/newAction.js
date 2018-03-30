import fetchNews from './../services/newService'

export const FETCH_NEWS = 'FETCH_NEWS'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_FAIL = 'FETCH_NEWS_FAIL'
export const CHANGE_PAGE_ID = 'CHANGE_PAGE_ID'
export const SET_WINDOW_WIDTH = 'SET_WINDOW_WIDTH'
export const SET_SELECTED_NEW_ID = 'SET_SELECTED_NEW_ID'
export const SET_DETAIL_DIALOG_STATUS = 'SET_DETAIL_DIALOG_STATUS'

export const fetchNewListSuccess = news => ({
  type: FETCH_NEWS_SUCCESS,
  news,
})

export const fetchNewListFail = errorMsg => ({
  type: FETCH_NEWS_FAIL,
  errorMsg,
})

export const changePageId = selectedPageId => ({
  type: CHANGE_PAGE_ID,
  selectedPageId,
})

export const setWindowWidth = windowWidth => ({
  type: SET_WINDOW_WIDTH,
  windowWidth,
})

export const selectNew = selectedNewId => ({
  type: SET_SELECTED_NEW_ID,
  selectedNewId,
})

export const setDetailDialogStatus = status => ({
  type: SET_DETAIL_DIALOG_STATUS,
  status,
})

export const fetchNewList = (location, page) => (
  (dispatch) => {
    // call fetch news
    dispatch({
      type: FETCH_NEWS,
    })

    return fetchNews(location, page).then((res) => {
      dispatch(fetchNewListSuccess(res.response.docs))
    }).catch((err) => {
      dispatch(fetchNewListFail(err.message))
    })
  }
)


// export const fetchNewList = (location, page) => ({
//   type: CHANGE_ERROR_MESSAGE,
//   error,
// })
