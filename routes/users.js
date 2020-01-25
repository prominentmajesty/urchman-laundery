var express = require('express');
var router = express.Router();

router.get('/register', function(req,res){
    res.render('register', {
        title : 'register-page',
        style : 'users.css',
        script : 'users.js'
    });
});
module.exports = router;