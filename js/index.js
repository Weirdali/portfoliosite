var init,    
    Carousel, 
    generateClouds, 
    generateGrid,
    hideArt,
    hideDesign,
    images = [],
    isArtShown,
    isDesignShown,
    mainCarousel, 
    positionClouds, 
    routes,
    showArt, 
    showCarousel,
    showDesign,
    //coffeescript.
    superBind = function(fn, self){ 
        return function(){ 
            return fn.apply(self, arguments); 
        }; 
    };

// A class definition for a generic carousel
Carousel = (function() {
    Carousel.prototype.container = null;
    Carousel.prototype.rail = null;
    Carousel.prototype.slides = null;
    Carousel.prototype.currentIndex = -1;
    
    //Constructor - takes the container, which is a means to find the moving parts of the carousel which are directly inside it
    function Carousel(container) {
        //'this' always needs to point to the instance of the carousel
        this.moveTo = superBind(this.moveTo, this);
        this.resizeSlides = superBind(this.resizeSlides, this);
        this.moveAfterResize = superBind(this.moveAfterResize, this);

        this.container = container;
        this.rail = container.getElementsByClassName('rail')[0];
        this.slides = this.rail.getElementsByClassName('slide');
        this.currentIndex = 0;
    }
    
    //Add methods to the class
    Carousel.prototype.resizeSlides = function () {
        var i, 
            slides = this.slides;

        for(i = 0; i < slides.length; i++) {
            slides[i].style.width = container.offsetWidth + 'px';
        } 
    };

    Carousel.prototype.moveAfterResize = function() {
        this.moveTo(this.currentIndex);
    };

    Carousel.prototype.moveTo = function (index) {
        var targetSlide = this.slides[index],
            amountToMove = targetSlide.offsetLeft;
        this.rail.style.left = "-" + amountToMove + "px";
        this.currentIndex = index;
    };

    Carousel.prototype.disableAnimations = function() {
        this.rail.classList.add("noTransition");
    }

    Carousel.prototype.enableAnimations = function() {
        this.rail.classList.remove("noTransition");
    }

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
    window.addEventListener('resize', function () {
        mainCarousel.disableAnimations();
        mainCarousel.resizeSlides();
        mainCarousel.moveAfterResize.bind(mainCarousel)();
        mainCarousel.enableAnimations.bind(mainCarousel)();
    }, false);
    
    routes = {
        'home': function () {
            if (isArtShown()) {
                hideArt();
                showCarousel();
                mainCarousel.moveTo(0);
            } else if (isDesignShown()) {
                hideDesign();
                showCarousel();
                mainCarousel.moveTo(0);
            } else {
                mainCarousel.moveTo(0);
            }
        },
        'work': function () {
            if (isArtShown()) {
                hideArt();
                showCarousel();
                mainCarousel.moveTo(1);
            } else if (isDesignShown()) {
                hideDesign();
                showCarousel();
                mainCarousel.moveTo(1);
            } else {
                mainCarousel.moveTo(1);
            }
        },
        'contact': function () {
            if (isArtShown()) {
                hideArt();
                showCarousel();
                mainCarousel.moveTo(2);
            } else if (isDesignShown()) {
                hideDesign();
                showCarousel();
                mainCarousel.moveTo(2);
            } else {
                mainCarousel.moveTo(2);
            }
        },
        'art': showArt,
        'design': showDesign
    };

    if (typeof routes[hashPath] === 'function') {
        routes[hashPath]();
    } 

    images[0] = "/alicegee/img/me.jpg";
    images[1] = "/alicegee/img/me.jpg";
    images[2] = "/alicegee/img/me.jpg";
    images[3] = "/alicegee/img/me.jpg";
    images[4] = "/alicegee/img/me.jpg";
    images[5] = "/alicegee/img/me.jpg";

    generateGrid();    
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

showArt = function() {
    document.getElementById("rail").style.top="-100%";
    document.getElementById("linksBanner").style.top="0%";
    document.getElementById("linksBanner").style.width="100%";
    document.getElementById("artGridWrapper").style.display="block";
    document.getElementById("artGridWrapper").style.top="20%";
}

showDesign = function() {
    document.getElementById("rail").style.top="-100%";
    document.getElementById("linksBanner").style.top="0%";
    document.getElementById("linksBanner").style.width="100%";
    document.getElementById("designGridWrapper").style.display="block";
}

generateGrid = function() {
    var i, 
        artBlock,
        imageSrc;
    
    for (i = 0; i < images.length; i++) {
        imageSrc = images[i]
        block = document.createElement("div");
        block.classList.add("artBlock");
        block.innerHTML = '<div class="artImage"><img src="' + imageSrc + '"></img></div>';
        document.getElementById("artGridCenter").appendChild(block);
    }
}

isArtShown = function() {
    return document.getElementById("artGridWrapper").style.display==="block";
}

isDesignShown = function() {
    return document.getElementById("designGridWrapper").style.display==="block";
}

hideArt = function() {
    if (window.matchMedia("screen and (min-width: 773px)").matches) {
        document.getElementById("artGridWrapper").style.top="100%";
        document.getElementById("artGridWrapper").style.display="none";
    } else {
        document.getElementById("artGridWrapper").style.opacity="0%";
        document.getElementById("artGridWrapper").style.display="none";
    }
}

hideDesign = function() {
    if (window.matchMedia("screen and (min-width: 773px)").matches) {
        document.getElementById("designGridWrapper").style.top="100%";
        document.getElementById("designGridWrapper").style.display="none";
    } else {
        document.getElementById("designGridWrapper").style.opacity="0%";
        document.getElementById("designGridWrapper").style.display="none";
    }
}

showCarousel = function() {
    if (window.matchMedia("screen and (min-width: 773px)").matches) {
        document.getElementById("linksBanner").style.width="50%";
        document.getElementById("linksBanner").style.top="75%";
        document.getElementById("rail").style.top="12%";
    } else {
        document.getElementById("rail").style.top="12%";
    }
}








