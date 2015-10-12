var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
    models.User.findAll().then(function(users){
        res.json(users);
    });
});

module.exports = router;
