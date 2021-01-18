const app = require('@/app');
const notFoundError = require('@/errors/http/notFound');

const routes = {
  '/auth': '@/routes/auth',
  '/users': '@/routes/users',
};

Object.keys(routes).forEach((rout) => {
  app.use(rout, require(routes[rout]));
});

app.get('/test', (req, res) => {
  res.send('ok');
});

app.use(function (req, res, next) {
  throw new notFoundError();
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: error.message,
  });
});
