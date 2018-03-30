import fetchNews from './../services/newService'

export const FETCH_NEWS = 'FETCH_NEWS'
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS'
export const FETCH_NEWS_FAIL = 'FETCH_NEWS_FAIL'

export const fetchNewListSuccess = news => ({
  type: FETCH_NEWS_SUCCESS,
  news,
})

export const fetchNewListFail = err => ({
  type: FETCH_NEWS_FAIL,
  err,
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
      dispatch(fetchNewListFail(err))
    })
  }
)


// export const fetchNewList = (location, page) => ({
//   type: CHANGE_ERROR_MESSAGE,
//   error,
// })
