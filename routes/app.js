var express = require('express');
var router = express.Router();
var User = require('../models/user');
var Message = require('../models/message.js');


router.get('/', function(req, res, next) {
    User.findOne({}, function(err, doc) {
        if (err) {
            return res.send('Error!');
        }
        res.render('node', { email: doc });
    });

});

router.post('/', function(req, res, next) {
    var email = req.body.email;
    var user = new User({
        firstName: 'Kris',
        lastName: 'Schmatkata',
        password: '1234',
        email: email
    });
    user.save();
    res.redirect('/');
});

module.exports = router;