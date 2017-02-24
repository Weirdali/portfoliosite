var init, generateClouds, positionClouds, showPortfolio, Carousel, mainCarousel, 
    routes;

// A class definition for a generic carousel
Carousel = (function() {
    Carousel.prototype.container = null;
    Carousel.prototype.rail = null;
    Carousel.prototype.slides = null;
    
    //Constructor - takes the container, which is a means to find the moving parts of the carousel which are directly inside it
    function Carousel(container) {
        this.container = container;
        this.rail = container.getElementsByClassName('rail')[0];
        this.slides = this.rail.getElementsByClassName('slide');
    }
    
    //Add methods to the class
    Carousel.prototype.resizeSlides = function () {
        var i, 
            slides = this.slides;

        for(i = 0; i < slides.length; i++) {
            slides[i].style.width = container.offsetWidth + 'px';
        } 
    };

    Carousel.prototype.moveTo = function (index) {
        var targetSlide = this.slides[index],
            amountToMove = targetSlide.offsetLeft;
        this.rail.style.left = "-" + amountToMove + "px";
    };

    return Carousel;
})();

init = function (event) {
    var clouds,
        hashPath = location.hash.substr(2);

    clouds = generateClouds();
    positionClouds(clouds);

    mainCarousel = new Carousel(document.getElementById('container'));
    mainCarousel.resizeSlides();
    //bind makes sure that the value of 'this' is mainCarousel
    window.addEventListener('resize', mainCarousel.resizeSlides.bind(mainCarousel), false);
    
    routes = {
        'home': mainCarousel.moveTo.bind(mainCarousel, 0),
        'work': mainCarousel.moveTo.bind(mainCarousel, 1),
        'contact': mainCarousel.moveTo.bind(mainCarousel, 2)
    };

    if (typeof routes[hashPath] === 'function') {
        routes[hashPath]();
    } 
};

//This is a hash value which happens to be a path. The / means it doesn't jump to IDs
window.addEventListener("hashchange", function () {
    //substr[2] cuts off the first 2 characters, which are #/
    var hashPath = location.hash.substr(2);
    
    //checking the type so th
    if (typeof routes[hashPath] === 'function') {
        routes[hashPath]();
    } 
}, false);

document.addEventListener("DOMContentLoaded", init); 

/* note: Credit this guy => http://jsfiddle.net/fZtdt/498/ */

generateClouds = function () {
    var i, 
        cloud, 
        clouds = new Array(20);

    for (i = 0; i < 20; i++) {
        cloud = document.createElement("div");
        cloud.classList.add("cloud");
        cloud.innerHTML = '<div class="cloudBase"></div><div class="cloudPart1"></div><div class="cloudPart2"></div><div class="cloudPart3"></div><div class="cloudPart4"></div>';
        document.body.appendChild(cloud);
        clouds[i] = cloud;
    }
    return clouds;
};

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
    }
};

/*------Art & Design/Dev-------*/

showPortfolio = function (cloudWrapper) {
    document.getElementById("rail").style.top="-100%"
    document.getElementById(cloudWrapper).style.display="block";

    if(cloudWrapper === "artCloudWrapper") {
        document.getElementById("homeBtn").setAttribute("class", "homeArtBtn");
        document.getElementById("workBtn").setAttribute("class", "workArtBtn");
        document.getElementById("contactBtn").setAttribute("class", "contactArtBtn");
    }
    else if(cloudWrapper === "designCloudWrapper") {
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