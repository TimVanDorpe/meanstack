var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next){
    //zet de respons op index.html
    res.render('index.html');
});

module.exports = router;