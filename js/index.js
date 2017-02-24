var init, generateClouds, positionClouds, positionSlides;


init = function (event) {
    var clouds;

    clouds = generateClouds();
    positionClouds(clouds);
};

document.addEventListener("DOMContentLoaded", init); 

/* note: Credit this guy => http://jsfiddle.net/fZtdt/498/ */

generateClouds = function () {
    var i, cloud, clouds = new Array(20);

    for (i = 0; i < 20; i++) {
        cloud = document.createElement("div");
        cloud.classList.add("cloud");
        cloud.innerHTML = '<div class="cloudBase"></div><div class="cloudPart1"></div><div class="cloudPart2"></div><div class="cloudPart3"></div><div class="cloudPart4"></div>';
        document.body.appendChild(cloud);
        clouds[i] = cloud;
    }
    return clouds;
}

positionClouds = function (clouds) {
    var min_x, max_x, min_y, max_y, filled_areas=[], i, rand_x, rand_y, area;

    min_x = 0;
    max_x = window.innerWidth
    min_y = 0;
    max_y = window.innerHeight;

    for (i = 0; i < clouds.length; i++) {
        rand_x=0;
        rand_y=0;
        area;

        rand_x = Math.round(min_x + ((max_x - min_x)*(Math.random() % 1)));
        rand_y = Math.round(min_y + ((max_y - min_y)*(Math.random() % 1)));
        area = {x: rand_x, y: rand_y, width: clouds[i].offsetWidth, height: clouds[i].offsetHeight};
    
        filled_areas.push(area);
        
        clouds[i].style.left=rand_x + "px"; 
        clouds[i].style.top=rand_y + "px";
    };
}


/*------------- Home Banner -------------*/  


    /*-----See Work Button-----*/

    document.getElementById("seeWorkBtn").addEventListener("click", function(e) {
        e.preventDefault();
        var homeBanner = document.getElementById("homeBanner");
        homeBanner.classList.remove("homeBannerOnLoad");
        setTimeout(function() {
            homeBanner.style.left="-100%";
        }, 10);
        setTimeout(function() {
            document.getElementById("portfolioBanner").style.left="0%";
        }, 100);
        setTimeout(function() {
            document.getElementById("contactBanner").style.left="100%";
        }, 100);

        document.getElementById("homeBtn").setAttribute("class", "homeWorkBtn");
        document.getElementById("workBtn").setAttribute("class", "workWorkBtn");
        document.getElementById("contactBtn").setAttribute("class", "contactWorkBtn");
    });


    /*-------Home Button-------*/


    /*
    Create array
    Each position in the array should reference the outermost bit of slide

    */

    document.getElementById("homeBtn").addEventListener("click", function(e) {
        if(e.target.classList.contains("homeHomeBtn")) {
            e.preventDefault();
        }
        else if(e.target.classList.contains("homeWorkBtn")) {
            e.preventDefault();
            
            setTimeout(function() {
                document.getElementById("contactBanner").style.left="200%";
            }, 10);
            setTimeout(function() {
                document.getElementById("portfolioBanner").style.left="100%";
            }, 50);
            setTimeout(function() {
                document.getElementById("homeBanner").style.left="0%";
            }, 100);
    
            document.getElementById("homeBtn").setAttribute("class", "homeHomeBtn");
            document.getElementById("workBtn").setAttribute("class", "workHomeBtn");
            document.getElementById("contactBtn").setAttribute("clas", "contactHomeBtn");
        }
        else if(e.target.classList.contains("homeContactBtn")) {
            e.preventDefault();

            setTimeout(function() {
                document.getElementById("contactBanner").style.left="200%";
            }, 10);
            setTimeout(function() {
                document.getElementById("portfolioBanner").style.left="100%";
            }, 50);
            setTimeout(function() {
                document.getElementById("homeBanner").style.left="0%";
            }, 100);          

            document.getElementById("homeBtn").setAttribute("class", "homeHomeBtn");
            document.getElementById("workBtn").setAttribute("class", "workHomeBtn");
            document.getElementById("contactBtn").setAttribute("class", "contactHomeBtn");
        }

        else if(e.target.classList.contains("homeArtBtn")) {
            e.preventDefault();

            document.getElementById("contactBanner").style.left="200%";
            document.getElementById("portfolioBanner").style.left="100%";
            document.getElementById("homeBanner").style.left="0%";
            
            setTimeout(function() {
                document.getElementById("artCloudWrapper").style.opacity="0";
                document.getElementById("artCloudWrapper").style.display="none";
            }, 50);

            setTimeout(function() {
                document.getElementById("portfolioBanner").style.top="12%";
                document.getElementById("homeBanner").style.top="12%";
                document.getElementById("contactBanner").style.top="12%";
            }, 100); 
        }

        else if(e.target.classList.contains("homeDesDevBtn")) {

        }
    });


    /*-------Work Button-------*/

    document.getElementById("workBtn").addEventListener("click", function(e) {
        if(e.target.classList.contains("workHomeBtn")) {
            e.preventDefault();
            
            var homeBanner = document.getElementById("homeBanner");
            homeBanner.classList.remove("homeBannerOnLoad");
            
            setTimeout(function() {
                homeBanner.style.left="-100%";
            }, 10);
            setTimeout(function() {
                document.getElementById("portfolioBanner").style.left="0%";
            }, 100);
            setTimeout(function() {
                document.getElementById("contactBanner").style.left="100%";
            }, 100);

            document.getElementById("homeBtn").setAttribute("class", "homeWorkBtn");
            document.getElementById("workBtn").setAttribute("class", "workWorkBtn");
            document.getElementById("contactBtn").setAttribute("class", "contactWorkBtn");
        }
        else if(e.target.classList.contains("workWorkBtn")) {
            e.preventDefault();
        }
        else if(e.target.classList.contains("workContactBtn")) {
            e.preventDefault();

            document.getElementById("homeBanner").style.left="-100%";
            setTimeout(function() {
                document.getElementById("contactBanner").style.left="100%";
            }, 10);  
            setTimeout(function() {
                document.getElementById("portfolioBanner").style.left="0%";
            }, 100);
            
            /*setTimeout(function() {
                document.getElementById("homeBanner").style.left="-100%";
            }, 100);*/

            document.getElementById("homeBtn").setAttribute("class", "homeWorkBtn");
            document.getElementById("workBtn").setAttribute("class", "workWorkBtn");
            document.getElementById("contactBtn").setAttribute("class", "contactWorkBtn");
        }
        else if(e.target.classList.contains("workArtBtn")) {
            e.preventDefault();

            
            setTimeout(function() {
                document.getElementById("artCloudWrapper").style.display="none";
            }, 50);

            setTimeout(function() {
                document.getElementById("portfolioBanner").style.top="12%";
                document.getElementById("homeBanner").style.top="12%";
                document.getElementById("contactBanner").style.top="12%";
            }, 100); 
        }
        else if(e.target.classList.contains("workDesDevBtn")) {
            e.preventDefault();

        }
    });


    /*-------Contact Button-------*/

    document.getElementById("contactBtn").addEventListener("click", function(e) {
        if(e.target.classList.contains("contactHomeBtn")) {
            e.preventDefault();

            var homeBanner = document.getElementById("homeBanner");
            homeBanner.classList.remove("homeBannerOnLoad");

            setTimeout(function() {
                homeBanner.style.left="-200%";
            }, 10);
            setTimeout(function() {
                document.getElementById("portfolioBanner").style.left="-100%";
            }, 50);
            setTimeout(function() {
                document.getElementById("contactBanner").style.left="0%";
            }, 100);

            document.getElementById("homeBtn").setAttribute("class", "homeContactBtn");
            document.getElementById("workBtn").setAttribute("class", "workContactBtn");
            document.getElementById("contactBtn").setAttribute("class", "contactContactBtn");
        }
        else if(e.target.classList.contains("contactWorkBtn")) {
            e.preventDefault();

            document.getElementById("homeBanner").style.left="-200%";

            setTimeout(function() {
                document.getElementById("portfolioBanner").style.left="-100%";
            }, 10)
            setTimeout(function() {
                document.getElementById("contactBanner").style.left="0%";
            }, 100);

            document.getElementById("homeBtn").setAttribute("class", "homeContactBtn");
            document.getElementById("workBtn").setAttribute("class", "workContactBtn");
            document.getElementById("contactBtn").setAttribute("class", "contactContactBtn");
        }
        else if(e.target.classList.contains("contactContactBtn")) {
            e.preventDefault();
        }
        else if(e.target.classList.contains("contactArtBtn")) {
            e.preventDefault();
        }
        else if(e.target.classList.contains("contactDesDevBtn")) {
            e.preventDefault();
        }
    });

    /*------Art & Design/Dev-------*/

    function showPortfolio(cloudWrapper){
    
        document.getElementById("portfolioBanner").style.top="-100%";
        document.getElementById("homeBanner").style.top="-100%";
        document.getElementById("contactBanner").style.top="-100%";
        document.getElementById(cloudWrapper).style.display="block";

        if(cloudWrapper == "artCloudWrapper") {
            document.getElementById("homeBtn").setAttribute("class", "homeArtBtn");
            document.getElementById("workBtn").setAttribute("class", "workArtBtn");
            document.getElementById("contactBtn").setAttribute("class", "contactArtBtn");
        }
        else if(cloudWrapper == "designCloudWrapper") {
            document.getElementById("homeBtn").setAttribute("class", "homeDesDevBtn");
            document.getElementById("workBtn").setAttribute("class", "workDesDevBtn");
            document.getElementById("contactBtn").setAttribute("class", "contactDesDevBtn");
        }
        
        setTimeout(function() {
            document.getElementById("balloon").style.top="25%";
        }, 100);
    }

    document.getElementById("artBtn").addEventListener("click", function(e) {
        e.preventDefault();
        showPortfolio("artCloudWrapper");
    });

    document.getElementById("designBtn").addEventListener("click", function(e) {
        e.preventDefault();
        showPortfolio("designCloudWrapper");
    });


    /*----------Contact------------*/
