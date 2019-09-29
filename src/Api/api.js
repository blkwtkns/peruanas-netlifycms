// Inject fetch polyfill if fetch is unsuported
// if (!window.fetch) { const fetch = require('whatwg-fetch') }

const putRaicesForm = async (url, input) => {

  try {
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });
    await response.json();
    return {
      dbInfo: true,
    };
  }
  catch (err) {
    return ({
      dbInfo: 'error',
    });
  }
}

export default putRaicesForm
