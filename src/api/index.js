const apiUrl = 'http://conduit.productionready.io/api/';

export function getGlobalFeed() {
  return new Promise((resolve, reject) => {
    fetch(apiUrl + 'articles')
      .then(res => res.json())
      .then(json => json.articles)
      .then(resolve)
      .catch(reject);
  });
}

export function getPersonalFeed(token) {
  return new Promise((resolve, reject) => {
    fetch(apiUrl + 'articles/feed', {
      headers: {
        Authorization: 'Token ' + token,
      },
    })
      .then(res => res.json())
      .then(json => json.articles)
      .then(resolve)
      .catch(reject);
  });
}

export function signin(email, password) {
  return new Promise((resolve, reject) => {
    fetch(apiUrl + 'users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
          password,
        },
      }),
    })
      .then(res => res.json())
      .then(json => json.user)
      .then(resolve)
      .catch(reject);
  });
}

export function signup(email, password, username) {
  return new Promise((resolve, reject) => {
    fetch(apiUrl + 'users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        user: {
          email,
          password,
          username,
        },
      }),
    })
      .then(res => res.json())
      .then(json => json.user)
      .then(resolve)
      .catch(reject);
  });
}
