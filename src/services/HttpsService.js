import axios from 'axios'
import clientSideCookies from 'js-cookie'

const withToken = axios.create()
const withoutToken = axios.create()

withToken.interceptors.request.use(
  config => {
    const token = clientSideCookies.get('byou_token')

    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error)
  }
)

withToken.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.response.status === 401) {
      sessionStorage.clear()
      window.location.reload(true)
    }
    return Promise.reject(error)
  }
)

export { withToken, withoutToken }
