var express = require('express');
var router = express.Router();
var User = require('../models/user');

router.get('/register', function(req,res){
    res.render('register', {
        title : 'register-page',
        style : 'users.css',
        script : 'users.js'
    });
});

router.post('/postUsers', function(req, res){
    var UserName = req.body.UserName;
    var PhoneNumber = req.body.PhoneNumber;
    var EmailAddress = req.body.EmailAddress;
    var Select  = req.body.Select;
    var DeliveryType = req.body.DeliveryType;
    var Address = req.body.Address;
    var Item = req.body.Item;
    var CardNumber = req.body.CardNumber;
    var ExpiringDate = req.body.ExpiringDate;
    var CardName = req.body.CardName;
    var CardCode = req.body.CardCode; 

    User.findOne({Email:EmailAddress}).then((returnEmail)=>{
        if(returnEmail){
            res.status(501).send('User allready exist');
            console.log(`${returnEmail} actually exist`);
        }else{
            res.status(200).send('Successfully registered');
            console.log(`new email ${returnEmail} has been registered`);
        }
    }, (err)=>{
        res.status(400).send('An error has occured');
        console.log(err);
    });
});
module.exports = router;