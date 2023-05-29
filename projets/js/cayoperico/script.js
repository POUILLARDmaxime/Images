/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

/*$(window).scroll(function(){
    if ($(window).scrollTop() >= 300) {
        $('nav').addClass('fixed-header');
        $('nav div').addClass('visible-title');
    }
    else {
        $('nav').removeClass('fixed-header');
        $('nav div').removeClass('visible-title');
    }
});*/

$(window).scroll(function(){
    if ($(window).scrollTop() >= 847) {
        $('header').addClass('fixed-header');
        objectJavascript = document.getElementById("header"); 
        objectJavascript.setAttribute("style", "position : fixed;")
        console.log(objectJavascript.style);
    }
    else {
        $('header').removeClass('fixed-header');
        objectJavascript = document.getElementById("header"); 
        objectJavascript.setAttribute("style", "position : absolute;")
        console.log(objectJavascript.style);
    }
});