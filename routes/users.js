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
    var Address = req.body.Adress;
    var Item = req.body.Item;
    var CardNumber = req.body.CardNumber;
    var ExpiringDate = req.body.ExpiringDate;
    var CardName = req.body.CardName;
    var CardCode = req.body.CardCode; 

    User.findOne({EmailAdress:EmailAddress}).then((returnEmail)=>{
        if(returnEmail){
            res.status(401).send(returnEmail);
        }else{
            let user = new User({
                UserName : UserName,
                PhoneNumber : PhoneNumber,
                EmailAdress : EmailAddress,
                SelectServices : Select,
                DeliveryType : DeliveryType,
                Address : Address,
                Items : Item,
                CardNumber : CardNumber,
                ExpiringDate :ExpiringDate,
                CardName : CardName,
                CardCode : CardCode,
            });
            user.save((err, data)=>{
                if(err){
                    console.log(err);
                   return res.status(401).send(err); 
                }
                res.status(200).send(data);
            console.log(`new email ${data.EmailAdress} has been registered`);
            });
        }
    }, (err)=>{
        res.status(400).send('An error has occured');
        console.log(err);
    });
});
module.exports = router;