const morgan = require('morgan');

module.exports.stream = {
    write: function (message, encoding) {
        logger.silly(message);
    }
};

const formatMaker = function (tokens, req, res) {
  return [
    "[REQ]",
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    JSON.stringify(req.body)

    // tokens.res(req, res, 'content-length'), '-',
    // tokens['response-time'](req, res), 'ms',
  ].join(' ')
};

module.exports.prod = morgan(formatMaker, {
    skip: function (req, res) {
      const url = `${req.get('host')+req.originalUrl}`;
      return url.indexOf("/health") > -1;
    }
});