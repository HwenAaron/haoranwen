$(function() {
    initial();
    status();
});

var listItem = $("ul.navbar-nav li");

function initial() {
    listItem.on("click", function() {
        listItem.removeClass("active");
        $(this).addClass("active");
    });
}

//buggy
function status() {
    var header = $("#header").offset().top;
    var about = $("#about").offset().top;
    var portfolio = $("#portfolio").offset().top;
    var contact = $("#contact").offset().top;
    
    var position = $(window).scrollTop();
    
    switch (position) {
        case position >= header && position < about: 
            listItem.removeClass("active");
            header.addClass("active");
        case position >= about && position < portfolio:
            listItem.removeClass("active");
            about.addClass("active");
        case position >= portfolio && position < contact: 
            listItem.removeClass("active");
            portfolio.addClass("active");
        case position >= contact: 
            listItem.removeClass("active");
            contact.addClass("active");
    }

}