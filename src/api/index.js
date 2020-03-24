const apiUrl = 'http://conduit.productionready.io/api/';

export function getMe(token) {
  return Get('user', 'user', token);
}

export function getTags() {
  return Get('tags', 'tags');
}

export function getComments(slug) {
  return Get(`articles/${slug}/comments`, 'comments');
}

export function getProfile(username, token) {
  return Get('profiles/' + username, 'profile', token);
}

export function getPersonalFeed({offset = 0}, token) {
  return Get(`articles/feed?offset=${offset}`, 'articles', token);
}

export function getGlobalFeed({offset = 0, author, favorited, tag}, token) {
  let q = '?';

  if (offset) {
    q += 'offset=' + offset + '&';
  }

  if (author) {
    q += 'author=' + author + '&';
  }

  if (favorited) {
    q += 'favorited=' + favorited + '&';
  }

  if (tag) {
    q += 'tag=' + tag + '&';
  }

  return Get('articles' + q, 'articles', token);
}

export function UpdateUser(user, token) {
  return Put('user', 'user', user, token);
}

function Get(endPoint, key, token) {
  return new Promise((resolve, reject) => {
    let options = {};

    if (token) {
      options = {
        headers: {
          Authorization: 'Token ' + token,
        },
      };
    }

    fetch(apiUrl + endPoint, options)
      .then(res => res.json())
      .then(json => {
        if (json[key]) {
          resolve(json[key]);
        } else {
          reject(json);
        }
      })
      .catch(reject);
  });
}

function Put(endPoint, key, data, token) {
  return new Promise((resolve, reject) => {
    let options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    if (token) {
      options.headers = {
        'Content-Type': 'application/json',
        Authorization: 'Token ' + token,
      };
    }

    fetch(apiUrl + endPoint, options)
      .then(res => res.json())
      .then(json => {
        if (json[key]) {
          resolve(json[key]);
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
