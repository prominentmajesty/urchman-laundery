var express = require('express');
var User = require('../models/user');

var router = express.Router();
router.post('/postman', (req, res)=>{
    var UserName = req.body.UserName;
    var PhoneNumber = req.body.PhoneNumber;
    var EmailAddress = req.body.EmailAddress;
    var Select = req.body.Select;
    var DeliveryType = req.body.DeliveryType;
    var Address  = req.body.address;
    var Items = req.body.items;
    var CardNumber = req.body.CardNumber;
    var ExpiringDate = req.body.ExpiringDate;
    var CardName = req.body.CardName;
    var CardCode = req.body.CardCode;

    var user = new User({
        UserName : UserName,
        PhoneNumber : PhoneNumber,
        EmailAdress : EmailAddress,
        SelectServices : Select,
        DeliveryType : DeliveryType,
        Address : Address,
        Items : Items,
        CardNumber : CardNumber,
        ExpiringDate : ExpiringDate,
        CardName : CardName,
        CardCode : CardCode,
    });

    user.save().then((document)=>{
    console.log(document);
    res.status(200).send('Your Registration Was successful');
    }).catch((err)=>{
        console.log(err);
        res.status(400).send('Un-Successfull!! : Request Failed');
    });
});
module.exports = router;