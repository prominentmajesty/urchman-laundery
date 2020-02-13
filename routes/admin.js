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

router.delete('/delete/:email', (req, res)=>{
    var email = req.params.email;
    User.findOneAndDelete({EmailAdress : email}, function(err, feedback){
        if(err){
            console.log(err);
        }else{
            console.log('Succesfully deleted');
            res.status(200).send(feedback);
        }
    })
});

module.exports = router;