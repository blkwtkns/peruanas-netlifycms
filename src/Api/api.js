// Inject fetch polyfill if fetch is unsuported
// if (!window.fetch) { const fetch = require('whatwg-fetch') }

const putRaicesForm = (url, input) => {

  return fetch(url, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(input),
  })
    .then(response => response.json())
    .then(json => {
      return {
        dbInfo: true,
      }
    })
    .catch(err => ({
      dbInfo: 'error',
    }))
}

export default putRaicesForm
