var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
  res.json({
      a: '123'
  })
});

module.exports = router;
