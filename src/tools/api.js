// global window.CONFIG

const config = window.CONFIG;

let basePath, restPath, wsPath;

basePath = config.baseUrl;
wsPath = config.websocket + '/api/';
restPath = basePath + '/api/';

export {
  wsPath,
  restPath,
  basePath
};
