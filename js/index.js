$(document).ready(function(){
    console.log("ready!");

    $("#workBtn").click(function(e){
        event.preventDefault();

        $("#homeBanner").animate({
            left: '-100%'
        }, 700);


        setTimeout(function() {
            $("#portfolioBanner").animate({
                left: '-0%'
            }, 700);
        }, 100)

        /*
         setTimeout(function() {
         window.location=$('#btn').attr("href");
         }, 500);*/

    });

    $("#artBtn").click(function(e){
        $("#portfolioBanner").animate({
            left: '-100%'

        }, 700);
    });

    $("#designBtn").click(function(e){
        $("#portfolioBanner").animate({
            left: '-100%'

        }, 700);
    });
});
