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

    /* get alt text to use for captions. */
    var $captionText = $(this).children("img").attr("alt");
    $caption.text($captionText);

    /* add text captions to the images when viewed in the lightbox. */
    $overlay.append($caption);

    /* add back and forward navigation buttons when the lightbox is visible to switch between photos. */
    $overlay.append($prevArrow);
    $overlay.append($nextArrow);


    /* link left arrow to previous image */
     $prevArrow.on("click", function() {
        var $prevImg = $(".selected").prev("a"); // find next link
        var $prevImgLocation = $prevImg.attr("href"); // set new image location
        $prevImg.next().removeClass("selected");  //remove class
        $prevImg.addClass("selected");            //add class
        $image.attr("src", $prevImgLocation);
    });

    /* link right arrow to next image */
    $nextArrow.on("click", function() {
        /* find next link */
        var $nextImg = $(".selected").next("a");
        /* set new image location */
        var $nextImgLocation = $nextImg.attr("href");
        /* remove selected class from previous image */
        $nextImg.prev().removeClass("selected");
        /* add selected class to new image */
        $nextImg.addClass("selected");
        /* update display image */
        $image.attr("src", $nextImgLocation);
    });


    /* add exit button. */
    $overlay.append($exit);

    /* show the overlay */
    $overlay.fadeIn(1500);

});


/* hide overlay when exit button is clicked. */
$exit.on("click", function() {
    $overlay.fadeOut(1000);
    $overlay.hide();
});

