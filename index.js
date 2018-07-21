//--------------[require]-----------------
var keystone = require("keystone");


//----------------[ init ]-----------------
keystone.init({
    'cookie secret' : 'this_is_my_ookie_secret',
    'static' : ['css', 'images', 'script'], //static files to be served to user
    'sass' : 'css',//scss files location//also where to store after compile
    'auth' : true, //to authenticate users who acess site//and admin area
    'user model' : 'adminUser',//this site only need admin user
    'auto update' : true //auto adds update folder content
});

//--------------------[ path api ]-----------------
keystone.get('routes', require('./routes/routes.js'));//keystone express routing

//------------------------------------user model ----------------------------
keystone.import('data_models');//keystone import all in the folder

//------------------------------------ admin navi menu -----------------------------
//change or add keystone navigation bar menu
keystone.set('nav', { Admin : "adminUser"})

//--------------------------------------- port -------------------------------------


//-------------------------------------- kestone start -------------------------------

keystone.start();