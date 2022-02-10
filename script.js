$(".hamburgerMenu").click(function(){
    $("nav").slideToggle();
    if($(".hamburgerMenu img").attr("src") == "assets/shared/icon-hamburger.svg"){
        $(".hamburgerMenu img").attr("src", "assets/shared/icon-close.svg");
    }
    else{
        $(".hamburgerMenu img").attr("src", "assets/shared/icon-hamburger.svg");
    }
})

document.location = 'about:config';
