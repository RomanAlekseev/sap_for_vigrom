class Http {
  get(url, mehtod = "GET") {
    return __sendRequest(mehtod, url);
  }
}

function __sendRequest(method, url) {
  return fetch(url, { method }).then(res => res.json());
}

export const http = new Http();
