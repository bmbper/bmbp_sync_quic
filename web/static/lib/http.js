// web/tsx/http.tsx
axios.interceptors.request.use(function(config) {
  if (!config.headers) {
    config.headers = { "content-type": "application/json" };
  } else if (!config.headers["content-type"]) {
    config.headers["content-type"] = "application/json";
  }
  return config;
}, function(error) {
  return Promise.reject(error);
});
axios.interceptors.response.use(function(response) {
  let data = response.data;
  if (data.error) {
    return {
      code: data.error.code,
      msg: data.error.name,
      data: response.config.url
    };
  } else {
    return data;
  }
}, function(error) {
  let errJson = error.toJSON();
  return {
    code: errJson.status,
    msg: errJson.msg,
    data: errJson.code
  };
});
