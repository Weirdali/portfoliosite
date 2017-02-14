document.addEventListener("DOMContentLoaded", function(event) {
    /*-------- clouds --------*/
    
    for (var i = 0; i < 20; i++) {
        var cloud = document.createElement("div");
        cloud.classList.add("cloud");
        cloud.innerHTML = '<div class="cloudBase"></div><div class="cloudPart1"></div><div class="cloudPart2"></div><div class="cloudPart3"></div><div class="cloudPart4"></div>';
        document.body.appendChild(cloud);
    }

    /*note: Credit this guy => http://jsfiddle.net/fZtdt/498/ */
    
    var min_x = 0;
    var max_x = window.innerWidth;
    var min_y = 0;
    var max_y = window.innerHeight;
    var filled_areas = new Array();
    var clouds = document.getElementsByClassName("cloud");

    for (var i = 0; i < clouds.length; i++) {
        var rand_x=0;
        var rand_y=0;
        var area;

        do {
            rand_x = Math.round(min_x + ((max_x - min_x)*(Math.random() % 1)));
            rand_y = Math.round(min_y + ((max_y - min_y)*(Math.random() % 1)));
            area = {x: rand_x, y: rand_y, width: clouds[i].offsetWidth, height: clouds[i].offsetHeight};
        } while(check_overlap(area));
        
        filled_areas.push(area);
        
        clouds[i].style.left=rand_x + "px"; 
        clouds[i].style.top=rand_y + "px";
    };

    function check_overlap(area) {
        for (var i = 0; i < filled_areas.length; i++) {
            
            check_area = filled_areas[i];
            
            var bottom1 = area.y + area.height;
            var bottom2 = check_area.y + check_area.height;
            var top1 = area.y;
            var top2 = check_area.y;
            var left1 = area.x;
            var left2 = check_area.x;
            var right1 = area.x + area.width;
            var right2 = check_area.x + check_area.width;
            if (bottom1 < top2 || top1 > bottom2 || right1 < left2 || left1 > right2) {
                continue;
            }
            return true;
        }
        return false;
    }

    /*------ animations ---------*/

    document.getElementById("workBtn").addEventListener("click", function(e) {
        e.preventDefault();

        var homeBanner = document.getElementById("homeBanner");
        homeBanner.classList.remove("homeBannerOnLoad");

        setTimeout(function() {
            homeBanner.style.left="-100%";
        }, 10);

        setTimeout(function() {
            document.getElementById("portfolioBanner").style.left="-0%";
        }, 100);

        /*
         setTimeout(function() {
         window.location=$('#btn').attr("href");
         }, 500);*/
    });
    
    document.getElementById("artBtn").addEventListener("click", function(e) {
        event.preventDefault();
        document.getElementById("portfolioBanner").style.left="-100%";
    });

    /*
    $("#artBtn").click(function(e){
        $("#portfolioBanner").animate({
            left: '-100%'

        }, 700);
    });*/

    document.getElementById("designBtn").addEventListener("click", function(e) {
        event.preventDefault(); 
        document.getElementById("portfolioBanner").style.left="-100%";
    });

    document.getElementById("workBtn").addEventListener("click", function(e) {
        e.preventDefault();

        setTimeout(function() {
            document.getElementById("portfolioBanner").style.left="-100%";
        }, 10);

    });
    
});
