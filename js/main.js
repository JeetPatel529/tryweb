$(".navbar-toggle_btn").click(function () {
    $(".header").toggleClass("header_mob")
    $(".header .navbar .nav-list").toggleClass("nav-list_active");
})

$(".header .navbar .nav-list .nav-link").click(function(){
    $(".header").removeClass("header_mob")
    $(".header .navbar .nav-list").removeClass("nav-list_active");
})