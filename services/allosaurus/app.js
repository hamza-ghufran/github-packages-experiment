const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const { Constants, Logger } = require('./util')

const PROD_LOG = ':method :status :response-time ms user :user :url';
const DEV_LOG = ':method :status :response-time ms :url';
const LOG_LEVEL = Constants.config.server.env !== 'production' ? DEV_LOG : PROD_LOG;

const app = express();

// Express configuration
app.disable('x-powered-by');
app.set('port', Constants.config.server.port);
app.set('env', Constants.config.server.env);
app.set('context', Constants.config.server.context);

app.use(
  morgan(LOG_LEVEL, {
    stream: Logger.winstonStream,
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Setup api routes
app.use('/', function (req, res, next) {
  res.send('Service name ::' + Constants.config.name);
});

app.use(function (req, res, next) {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

module.exports = app
