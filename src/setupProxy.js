const proxy = require('http-proxy-middleware');

<<<<<<< HEAD
module.exports = function (app) {
=======
module.exports = function(app) {
>>>>>>> 6fe7a7deb55bd77f5f91c4e387bc7ec9e2da9486
  app.use(
    '/api',
    proxy({
      target: 'http://127.0.0.1:8000',
      changeOrigin: true,
      pathRewrite: {
        '^/api/': '/',
      },
    })
  );
};
