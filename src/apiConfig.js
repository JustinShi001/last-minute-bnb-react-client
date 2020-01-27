let apiUrl
const apiUrls = {
  production: 'https://quiet-shore-94387.herokuapp.com/',
  development: 'https://quiet-shore-94387.herokuapp.com/'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

export default apiUrl
