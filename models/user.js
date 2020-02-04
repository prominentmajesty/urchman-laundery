var mongoose = require('mongoose');
const UserSchema = mongoose.Schema({
    UserName : {
        type : String,
        required : true
    },
    PhoneNimber : {
        type : String,
        required : true
    },
    Email : {
        type : String,
        required : true
    },
    SelectServices : {
        type : String,
        required : true
    },
    DeliveryType : {
        type : String,
        required : true,
    },
    Address : {
        type : String,
        required : true
    },
    Item : {
        type : String,
        required : true
    },
    CardNumber : {
        type : String,
        required : true
    },
    ExpiringDate : {
        type : String,
        required : true
    },
    CardName : {
        type : String,
        required : true
    },
    CardCode : {
        type : String,
        required : true
    }
});

module.exports = Users = mongoose.model('User', UserSchema);
