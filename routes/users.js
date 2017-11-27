//Hier haal ik mijn gegevens op van mijn databank

var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://Tim:root@ds053126.mlab.com:53126/meanstack_tim', ['users']);

module.exports = router;

//register a user
router.post('/register', (req, res) => {
    res.send('hello world');
});



// Get All Users
router.get('/users', function(req, res, next){
    db.users.find(function(err, users){
        if(err){
            res.send(err);
        }
        res.json(users);
    });
});

//get 1 user
router.get('/user/:id', function(req, res, next){
    db.users.findOne({_id: mongojs.ObjectId(req.params.id)}, function(err, user){
        if(err){
            res.send(err);
        }
        res.json(user);
    });
});


