/* Create a lightbox for viewing full size images when their thumbnails are clicked. */

/* Find a jQuery plugin for creating a photo gallery or write your own script. */

/* The gallery must include the ability to click on photos and view them in a lightbox. */


/*** OVERLAY ***/

var $overlay = $("<div id='overlay'></div>");
var $image = $("<img class='overlay-image'>");
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

     // call the function that captures information about the image container clicked on
    getCurrentImage(this);

    /* add image to overlay */
    $overlay.append($image);

    /* get alt text to use for captions. */
//    var $captionText = $(this).children("img").attr("alt");
//    $caption.text($captionText);

    /* add text captions to the images when viewed in the lightbox. */
    $overlay.append($caption);

    /* add back and forward navigation buttons when lightbox is visible */
    $image.after($prevArrow);
    $image.before($nextArrow);

      /* add exit button. */
    $overlay.append($exit);

    /* show the overlay */
    $overlay.fadeIn(1500);
});

/* When the next button is clicked... */
    $nextArrow.on("click", function(event) {
    // call the function that captures information about the next image inline to be shown
    getNextImage();
    // show the next image
    $image.show();
    $caption.show();
});

/* When the previous button is clicked... */
$prevArrow.on("click", function(event){
    getPreviousImage();
    // show the previous image
    $image.show();
    $caption.show();
});

/* Hide overlay when exit button is clicked. */
$exit.on("click", function() {
    $overlay.fadeOut(1000);
    $overlay.hide();
});

/* FUNCTIONS */

// Retreive the image container that was clicked on.
function getCurrentImage(currentImage) {
    // identify the child of the image container
    thisImage = $(currentImage);
    // capture the href & src information of the image that was clicked
    thisImageLocation = $(thisImage).attr("href");
    // update the overlay image info to reflect the image that was clicked
    $image.attr("src", thisImageLocation);
    // get current image's caption
    var $captionText = thisImage.children("img").attr("alt");
    $caption.text($captionText);
}

function getNextImage() {
    // get the image container of the next image
    nextImageParent = $(thisImage).parent().next();
    //identify the child of the next image container
    nextImage = $(nextImageParent).children("a");
    //capture the href & src information of the next image
    nextImageLocation = $(nextImage).attr("href");
    // update your overlay image info to reflect the next image
    $image.attr("src", nextImageLocation);
    //call the function that captures information about your new current image
    getCurrentImage(nextImageParent);
}

function getPreviousImage() {
    // get the image container of the previous image
    prevImageParent = $(thisImage).parent().prev();
    // identify the child of the previous image container
    prevImage = $(prevImageParent).children("a");
    // capture the href & src information of the previous image
    prevImageLocation = $(prevImage).attr("href");
    // update the overlay image info to reflect the previous image
    $image.attr("src", prevImageLocation);
    //call the function that captures information about your new current image
    getCurrentImage(prevImageParent);
}

