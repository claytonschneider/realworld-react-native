const apiUrl = 'http://conduit.productionready.io/api/';

export function getGlobalFeed() {
  return new Promise((resolve, reject) => {
    fetch(apiUrl + 'articles')
      .then(res => res.json())
      .then(json => {
        if (json.articles) {
          resolve(json.articles);
        } else {
          reject(json);
        }
      })
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
      .then(json => {
        if (json.articles) {
          resolve(json.articles);
        } else {
          reject(json);
        }
      })
      .catch(reject);
  });
}

export function FavouriteArticle(token, slug) {
  return new Promise((resolve, reject) => {
    fetch(apiUrl + 'articles/' + slug + '/favorite', {
      method: 'POST',
      headers: {
        Authorization: 'Token ' + token,
      },
    })
      .then(res => res.json())
      .then(json => {
        if (json.article) {
          resolve(json.article);
        } else {
          reject(json);
        }
      })
      .catch(reject);
  });
}

export function UnFavouriteArticle(token, slug) {
  return new Promise((resolve, reject) => {
    fetch(apiUrl + 'articles/' + slug + '/favorite', {
      method: 'DELETE',
      headers: {
        Authorization: 'Token ' + token,
      },
    })
      .then(res => res.json())
      .then(json => {
        if (json.article) {
          resolve(json.article);
        } else {
          reject(json);
        }
      })
      .catch(reject);
  });
}

export function CreateArticle(token, title, description, body, tagList) {
  return new Promise((resolve, reject) => {
    fetch(apiUrl + 'articles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + token,
      },
      body: JSON.stringify({
        article: {
          title,
          description,
          body,
          tagList,
        },
      }),
    })
      .then(res => res.json())
      .then(json => {
        if (json.article) {
          resolve(json.article);
        } else {
          reject(json);
        }
      })
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
      .then(json => {
        if (json.user) {
          resolve(json.user);
        } else {
          reject(json);
        }
      })
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
      .then(json => {
        if (json.user) {
          resolve(json.user);
        } else {
          reject(json);
        }
      })
      .catch(reject);
  });
}
