var nunjucks = require("nunjucks");


exports = module.exports = function (app){//kestone express routing
    nunjucks.configure('html', {//nunjucks setting and attach express() app
        autoescape : true,
        express : app
    })
    
    app.get('/', function (req, res){//home page
        
        let locals = res.locals;//keystone locals
        locals.site_title = "ztify";
        locals.site_page = "home";
        
        locals.category_array = [ "Clothing", "Shoes", "Acessories", "Gadgets"];
        locals.category_array_length = locals.category_array.length;

        locals.links_array = ['https://image.ibb.co/gKpFid/xZgiyU.jpg', 'https://image.ibb.co/i5L5id/20141203193138_5_tech_tool_help_compete_with_big_guys.jpg', 'https://image.ibb.co/mr9j9J/1480488432_383_background_image.jpg'];

        locals.body_background_colour = "#33333D";
        locals.body_text_colour = "#FFFFFF";
        locals.all_buttons_border_color = "#005D57";
        locals.all_buttons_background_color = "#33333D"
        locals.all_buttons_text_color = "#FFFFFF";
        locals.all_buttons_border_size = 1;
        locals.all_buttons_border_radius_right = 20;
        locals.all_buttons_border_radius_left = 20;
        locals.all_buttons_size = 1;
        locals.category_buttons_size = 25;

        
        res.render('index.html');
    });
}