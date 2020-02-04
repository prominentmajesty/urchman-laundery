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
    var items = req.body.items;
    var CardNumber = req.body.CardNumber;
    var ExpiringDate = req.body.ExpiringDate;
    var CardName = req.body.CardName;
    var CardCode = req.body.CardCode;
});
module.exports = router;