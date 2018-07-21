var keystone = require('keystone');


var admin_model =new keystone.List('adminUser');

admin_model.add({
    name : {type : String, required : true },//removed required trouble using it
    email : {type : keystone.Field.Types.Email, required : true, unique : true, initial : "admin@gmail.com"},
    password : {type : keystone.Field.Types.Password}
});

admin_model.schema.virtual('canAccessKeystone').get(function(){return true});
//fogot function to set admin menu layout
admin_model.defaultColumns= 'name, email, password';

admin_model.register();

