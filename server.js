var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var connect_Flash = require('connect-flash');
var express_Session = require('express-session');
var index = require('./routes/index');
var users = require('./routes/users');
var admin = require('./routes/admin');
var {config} = require('./database/database');


var app = express();
var port = process.env.PORT || 3000;

mongoose.connect(config,{useUnifiedTopology: true,useNewUrlParser: true}, function(){
    console.log('Data Base Connected Successfully');
});

app.use(express.static('./public'));
app.engine('.hbs', exphbs({
    extname: '.hbs',
    defaultLayout: 'main',
    partialsDir: 'views/partials',
    helpers : {
        base64ArrayBuffer : require('./utils/base64ArrayBuffer')
    }
}));

app.set('view engine', '.hbs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express_Session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: false,
    cookie: {
        maxAge: 300000 
    }
}));
app.use(connect_Flash());
app.use((req,res,next)=>{
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg'); 
    next();
  });
  app.use('/',index);
  //app.use('/admin',admin);
  //app.use('/users',users);

app.listen(port, ()=>{
    console.log(`Cool !! app is up and running @ port ${port}`);
});