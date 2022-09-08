/* eslint-disable linebreak-style */
/* eslint no-multiple-empty-lines: */
// eslint-disable-next-line eol-last
// eslint-disable-next-line no-trailing-spaces
/* eslint eol-last: ["error", "never"] */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes);

  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};
init();