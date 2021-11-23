const { Logger, Constants } = require('./util');

const app = require('./app');

const log = Logger.logger;

async function runServer() {
  try {
    const server = app.listen(app.get('port'), () => {
      log.info(`Server started at http://localhost:${app.get('port')}`);
      log.info(`Server running in ${app.get('env')} mode using ${app.get('context')} environment`);
    });

    // Catch unhandled promise rejections
    process.on('unhandledRejection', (err) => {
      console.error('Unhandled Rejection --> ', err);
    });

    return server;
  } catch (e) {
    log.error(`<<< Server initialization failed >>> ${e.message}`);
    log.error(`<<< Server initialization Begin >>>`);
    log.error(`${e.stack}`);
    log.error(`<<< Server initialization End >>>`);
  }
}

const serverAsPromise = runServer();

module.exports = serverAsPromise;
