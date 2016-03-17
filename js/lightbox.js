/* Create a lightbox for viewing full size images when their thumbnails are clicked. */

/* Find a jQuery plugin for creating a photo gallery or write your own script. */

/* The gallery must include the ability to click on photos and view them in a lightbox. */


/*** OVERLAY ***/

var $overlay = $("<div id='overlay'></div>");
var $image = $("<img>");
var $caption = $("<p></p>");
var $exit = $('<button id="exit">exit</button>');
var $prevArrow = $('<button id="prevArrow"><</button>')
var $nextArrow = $('<button id="nextArrow">></button>');


/* Add overlay to body of index.html */
$("body").append($overlay);

/* When a thumbnail is clicked... */
$("#gallery a").click(function(event) {

    /* stop click from opening img url */
    event.preventDefault();

    /* get image's url */
    var $imageLocation = $(this).attr("href");

    /* add image to overlay */
    $overlay.append($image);

    /* get img location */
    $image.attr("src", $imageLocation);

    /* add .selected class to current image */
    var $currentImage = $(this);
    $currentImage.addClass("selected");

    /* Get alt text to use for captions. */
    var $captionText = $(this).children("img").attr("alt");
    $caption.text($captionText);

    /* Add text captions to the images when viewed in the lightbox. */
    $overlay.append($caption);

    /* Add back and forward navigation buttons when the lightbox is visible to switch between photos. */
    $overlay.append($prevArrow);
    $overlay.append($nextArrow);


    /* Link left arrow to previous image */
     $prevArrow.on("click", function() {
        var $prevImg = $(".selected").prev("a"); // find next link
        var $prevImgLocation = $newImg.attr("href"); // set new image location
        $prevImg.next().removeClass("selected");  //remove class
        $prevImg.addClass("selected");            //add class
        $image.attr("src", $prevImgLocation);
    });

    /* Link right arrow to next image */
    $nextArrow.on("click", function() {
        /* find next link */
        var $nextImg = $(".selected").next("a");
        /* set new image location */
        var $nextImgLocation = $newImg.attr("href");
        /* remove selected class from previous image */
        $nextImg.prev().removeClass("selected");
        /* add selected class to new image */
        $nextImg.addClass("selected");
        /* update display image */
        $image.attr("src", $nextImgLocation);
    });


    /* Add exit button. */
    $overlay.append($exit);

    /* show the overlay */
    $overlay.fadeIn(1500);

});


/* Hide overlay when exit button is clicked. */
$exit.on("click", function() {
    $overlay.fadeOut(1000);
    $overlay.hide();
});


/*** SEARCH BOX ***/
/* Implement the search box at the top of the page that filters photos based on the captions.
    - The photos should filter in real-time as you type.
    - This could be a jQuery plugin that you find on the web, or code that you write yourself. */


