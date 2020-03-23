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
