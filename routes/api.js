const express = require ('express');
const router = express.Router();
const User = require('../models/user');

router.get('/users', function(req, res){
    res.send({type: 'GET'});
});

module.exports = router;