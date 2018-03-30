import axios from 'axios'

export const apiKey = '13ab15b049e548bf9d4410f8ce326004'
const baseURL = 'http://api.nytimes.com/'
export const service = axios.create({
  baseURL,
})

