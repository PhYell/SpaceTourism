let isOnPage = sessionStorage.getItem("onPage");
if (isOnPage == null) isOnPage = 1;

$("document").ready(function(){
    changeTab(isOnPage);
    $(`.techTab img:nth-of-type(${isOnPage})`).show();
    console.log("technology tab page : ", isOnPage);
})
$(".circleButton").click(function(){
    changeTab(parseInt($(this).text()));    
    sessionStorage.setItem("onPage", parseInt($(this).text()));
    console.log($(window).width());
})

function changeTab(tab){
    $(".circleButton").removeClass("circleButtonHere");
    $(`.circleButton:contains(${tab})`).addClass("circleButtonHere");
    switch(tab){
        case 1:
            $(".techTab h1").text("LAUNCH VEHICLE")
            $(".techTab p:nth-of-type(2)").text("A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!");
            $(".techTab img:nth-of-type(1)").show();
            $(".techTab img:nth-of-type(2)").hide();
            $(".techTab img:nth-of-type(3)").hide();
            break;
        case 2:
            $(".techTab h1").text("SPACEPORT")
            $(".techTab p:nth-of-type(2)").text("A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.");
            $(".techTab img:nth-of-type(2)").show();
            $(".techTab img:nth-of-type(1)").hide();
            $(".techTab img:nth-of-type(3)").hide();
            break;
        case 3:
            $(".techTab h1").text("SPACE CAPSULE")
            $(".techTab p:nth-of-type(2)").text("A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.");
            $(".techTab img:nth-of-type(3)").show();
            $(".techTab img:nth-of-type(1)").hide();
            $(".techTab img:nth-of-type(2)").hide();
            break;
    }
}