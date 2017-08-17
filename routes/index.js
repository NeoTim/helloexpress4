var express = require('express');
var jwt = require("jsonwebtoken");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  return res.status(200).json('ok');
});

router.post('/login',function(req,res,next){
  // cert must same as expressJwt secret
  var secret = 'nyancat 4 ever';
  var token = jwt.sign({username: req.body.username, password: req.body.password},secret,{expiresIn:  60 * 60});//expire 1 hour
  return res.status(200).json(token);
});

router.post('/token',function(req,res,next){
  console.log('token accept');
  return res.status(200).json('ok');
});

module.exports = router;
