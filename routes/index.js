const express = require('express');

var router = express.Router();

router.get('/', function(req,res){
    res.render('index', {
        title : 'index-page',
        style : 'index.css',
        script : 'index.js'
    });
});
module.exports = router;