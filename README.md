Portfolio Site

The Site
-----------

- This is a single page responsive web app designed to display my ability to design and useHTML5, CSS3 and JavaScript. 
- There are a number of 'pages' which respond to changes in the URL, for example http://alicegee.com/#/work
- The sections are as follows:
		- Home
		- Work
		- Contact
		- Artwork
		- 1st Year Website/Web Design (is a link on mobile)
		- App Design

The HTML
--------

- The site is valid HTML5 and utilises /<main>, /<section> and /<nav> tags
- alt tags are used on images for screen readers
- An SVG polygon was used in the creation of the balloon
- The carousel is structured so that each banner is held within a rail. The rail moves and the banners do not. The width of the banners are controlled by the container.
- An iFrame is used to display the 1st year website

The CSS
-------

- Two fonts were included, one for the title and one for the rest of the text
- Media queries were used for mobile-first responsive development
- Keyframe animations were used in the loading of the homepage and links banners, the balloon animations and the loading of the art/development grids
- Transitions were used to control the animations
- The clouds and balloon were created with the use of border-radius
- The inspiration for the balloon structure came from: 
		- http://www.chloechen.io/a-happy-hot-ballon/
- The curves of the balloon were created with the guide from: 
		- http://stackoverflow.com/questions/4698830/curved-lines-using-only-html-and-or-css?noredirect=1&lq=1
    	- http://jsfiddle.net/yijiang/nDxYJ/


The JavaScript
--------------

- All global variables are declared at the start of the file.
- All functions for the carousel (the moving banners) are held inside a carousel object, the class of which is declared at the start of the file. This object allows for the movement of the rail and the resizing of the banners/slides. 
- There is a superBind function which simplifies accessing the carousel properties
- An init function is passed into the eventListener for the DOM, which initialises the page by generating the clouds, creating the carousel object, generating JSON data for the purposes of using URL 
- A hashchange function is applied to the window and is used to detect any changes in the URL and respond to them correctly
- 20 clouds are generated and placed in random positions with converted jquery, courtesy of: 
		- http://jsfiddle.net/fZtdt/498/
- There are two functions for calculating and setting the height or width of a large image - the image to be displayed when the preview is clicked on in the grid.
- There is a function for displaying the artwork/design grids. This also creates two event listeners on the large image that is displayed when the preview is clicked on in the grid. The first is for the calculation of the width and height, the second is for closing either by clicking or pressing 'escape'
- There are also functions which activate animations when the URL changes
- The contact page uses AJAX to send JSON data to contact.php, which sends the result JSON data to be displayed on the page, thus demonstrating an ability to use local JSON data.

- NOTE: There is code in a separate branch named 'Twitter' for an Twitter API that pulls JSON data from a tweet search. However, the front end portion of this turned out to be nearly identical to the code to pull local JSON data, and the API did not end up being useful for the site and would disrupt the layout and feel, therefore it has been scrapped. However, the code is there to demonstrate my ability to use third party API JSON data. 


Inspiration and Development of Ideas
------------------------------------

This site started with the premise of a sliding banner. This then evolved into the idea of a banner in the sky, and from there multiple ideas emerged. The most achievable of these were randomly-placed clouds and the animated balloon.

The original idea was for a carousel of cyclable images, but this was later exchanged for a more modern grid. A few buttons were moved around, and the links banner was kept for consistency.

I was heavily influenced by the following designs:
http://www.onextrapixel.com/wp-content/uploads/2014/01/1.jpg
http://images.sixrevisions.com/2010/02/24-10_nathan_sanders.jpg
http://media02.hongkiat.com/web-design-trend-2013/21-lucia-soto-freelance-portfolio-circles-website.jpg

The concept of the blue/turquoise background, indicating calmness, and the red text in the foreground, indicating creativity and passion, greatly appeals to me, as does the flat colouring and use of space to indicate simplicity. I feel that the colour scheme pairs with the theme sensibly, and I have balanced out the design by having the rounded clouds in the background and the sharp, square edges in the foreground.


Documentation
-------------

Wireframes:
alicegee.com/documentation
