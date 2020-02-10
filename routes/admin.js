var express = require('express');
var User = require('../models/user');

var router = express.Router();

router.get('/admin', function(req, res){
    User.find({}).then((returnDoc)=>{
        res.render('admin',{
            title : 'Admin',
            style : 'admin.css',
            script : 'admin.js',
            returnDoc 
        });
    }).catch((err)=>{
        console.log(err);
        res.status(500).send(err);
    });
});

module.exports = router;