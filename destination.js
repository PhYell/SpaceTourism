let isOnPage = sessionStorage.getItem("onPlanet");
if (isOnPage == null) isOnPage = "moon";

$("document").ready(function(){
    changeTab(isOnPage);
    console.log(isOnPage);
})
$(".planetTabButton").click(function(){
    changeTab($(this).text());
    sessionStorage.setItem("onPlanet", $(this).text());
})

function changeTab(tab){
    $(".buttonHere").removeClass("buttonHere");
    $(`.planetTabButton:contains(${tab})`).addClass("buttonHere");
    $(".planetName").text(tab);
    switch(tab){
        case "moon":
            $(".planetHolder img").attr("src", "assets/destination/image-moon.png")
            $(".planetDescription").text("See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites."); 
            $(".distanceNum").text("384,400 km");
            $(".timeNum").text("3 days");
            break;
        case "mars":
            $(".planetHolder img").attr("src", "assets/destination/image-mars.png")
            $(".planetDescription").text("Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!");
            $(".distanceNum").text("225 MIL. km");
            $(".timeNum").text("9 months");
            break;
        case "europe":
            $(".planetHolder img").attr("src", "assets/destination/image-europa.png")
            $(".planetDescription").text("The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.");
            $(".distanceNum").text("628 MIL. km");
            $(".timeNum").text("3 years");
            break;
        case "titan":
            $(".planetHolder img").attr("src", "assets/destination/image-titan.png")
            $(".planetDescription").text("The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.");
            $(".distanceNum").text("1.6 BIL. km");
            $(".timeNum").text("7 years");
            break;
    }
}