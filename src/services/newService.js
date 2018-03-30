import { service, apiKey } from './serviceConfig'

export default function fetchNews(location, page) {
  const promise = new Promise((resolve, reject) => {
    service.get(`svc/search/v2/articlesearch.json?q=${location}&page=${page}&api-key=${apiKey}`)
      .then((response) => {
        if (response.status === 200) {
          resolve(response.data)
        }
      }).catch((err) => {
        reject(err)
      })
  })
  return promise
}
// export default getNewService = {
//   fetchNews,
// }
