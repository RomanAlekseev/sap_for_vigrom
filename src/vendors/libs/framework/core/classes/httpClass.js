class Http {
  get(url, mehtod = "GET") {
    return __sendRequest(mehtod, url);
  }
}

function __sendRequest(method, url) {
  return fetch(url, { method });
}

export const http = new Http();
