var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send({
    time: new Date(),
    requester: {
      origin: req.get('origin'),
      ip: req.socket.remoteAddress,
    },
    server: {
      host: req.get('host'),
      name: 'bicycle-crud',
      server: 'express',
      latestApiVersion: 'v1',
    },
  });
});

module.exports = router;
