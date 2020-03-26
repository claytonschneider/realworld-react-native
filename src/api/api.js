export default class api {
  constructor() {
    this.token;
    this.apiUrl = 'http://conduit.productionready.io/api/';
  }

  // start of public methods

  setToken(token) {
    this.token = token;
  }

  getMe() {
    return this.Get('user');
  }

  getTags() {
    return this.Get('tags');
  }

  getComments(slug) {
    return this.Get(`articles/${slug}/comments`, 'comments');
  }

  getProfile(username) {
    return this.Get('profiles/' + username, 'profile');
  }

  getPersonalFeed(offset) {
    let q = this.addQueries({offset});
    return this.Get('articles/feed' + q, 'articles');
  }

  getGlobalFeed(queries) {
    let q = this.addQueries(queries);
    return this.Get('articles' + q, 'articles');
  }

  updateUser(user) {
    return this.Put('user', user);
  }

  setFavorite(slug) {
    return this.Post(`articles/${slug}/favorite`, {}, 'article');
  }

  removeFavorite(slug) {
    return this.Delete(`articles/${slug}/favorite`, 'article');
  }

  setArticle(title, description, body, tagList) {
    return this.Post(
      'articles',
      {article: title, description, body, tagList},
      'article',
    );
  }

  setFollow(username) {
    return this.Post(`profiles/${username}/follow`, {}, 'profile');
  }

  removeFollow(username) {
    return this.Delete(`profiles/${username}/follow`, 'profile');
  }

  signIn(email, password) {
    return this.Post('users/login', {user: email, password}, 'user');
  }

  signUp(email, password, username) {
    return this.Post('users', {user: email, password, username}, 'user');
  }

  //end of public methods

  Get(endPoint, key) {
    let options = {};

    this.addToken(options);

    return this.request(endPoint, key, options);
  }

  Post(endPoint, data = {}, key) {
    let options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    this.addToken(options);

    return this.request(endPoint, key, options);
  }

  Delete(endPoint, key) {
    let options = {
      method: 'DELETE',
    };

    this.addToken(options);

    return this.request(endPoint, key, options);
  }

  Put(endPoint, data, key) {
    let options = {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    };

    this.addToken(options);

    return this.request(endPoint, key, options);
  }

  addQueries(queries) {
    let q = '?';
    console.log(queries);
    Object.keys(queries).forEach((value, index) => {
      if (queries[value]) {
        q += value + '=' + queries[value] + '&';
      }
    });
    return q;
  }

  addToken(options) {
    if (this.token) {
      if (!options.headers) {
        options.headers = {};
      }
      options.headers.Authorization = 'Token ' + this.token;
    }
  }

  request(endPoint, key, options) {
    return new Promise((resolve, reject) => {
      console.log(endPoint);
      if (!key) {
        key = endPoint;
      }
      fetch(this.apiUrl + endPoint, options)
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
}
