var mongoose = require('mongoose');
var AutoIncreament = require('mongoose-sequence')(mongoose);
const UserSchema = mongoose.Schema({
    UserName : {
        type : String,
        required : true
    },
    PhoneNumber : {
        type : String,
        required : true
    },
    EmailAdress : {
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
    Items : {
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
    },
    order : {
        type : Number
    }
});

UserSchema.plugin(AutoIncreament, {id : 'order_seq', inc_field : 'order'});

module.exports = User = mongoose.model('User', UserSchema);
