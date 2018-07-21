

//--------------------- Slider function ---------------------------
var now_image = 1;
function home_page_slider (links_array){
    if(now_image < links_array.length){ now_image = 1;}
    document.getElementById("slider_menu").style.backgroundImage = "url("+links_array[now_image]+")";
    return now_image = now_image + 1;
}

var slider_timer = setInterval(home_page_slider, 3000);

document.getElementById("slider_menu").onmouseover = function (){

    clearInterval(slider_timer);  
}

document.getElementById("slider_menu").onmouseout = function (){

  var slider_timer = setInterval(home_page_slider, 3000); 
}


/*


var myVar;

function myFunction() {
    myVar = setInterval(alertFunc, 3000);
}

function alertFunc() {
  alert("Hello!");
}

*/