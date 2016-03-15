/* Create a lightbox for viewing full size images when their thumbnails are clicked. */

/* Find a jQuery plugin for creating a photo gallery or write your own script.
    The gallery must include the ability to click on photos and view them in a lightbox. */

var $overlay = $("<div id='overlay'></div>");
var $fullImage = $("<img>");
var $caption = $("<p></p>");



/* OVERLAY */
/* Add overlay to body of index.html */
$("body").append($overlay);

/* When a thumbnail is clicked... */
$("#gallery li a").click(function(event) {

    /* stop click from opening img url */
    event.preventDefault();

    /* get image's url */
    var $imageLocation = $(this).attr("href");

    /* update image */
    $overlay.append($fullImage);
    $fullImage.attr("src", $imageLocation);


    /* Add text captions to the images when viewed in the lightbox. */
    $overlay.append($caption);

    /* Get alt text to use for captions. */
    var $captionText = $(this).children("img").attr("alt");
    $caption.text($captionText);

    /* show the overlay */
    $overlay.show();

});


/* CAPTIONS */
/* Add text captions to the images when viewed in the lightbox. */
$overlay.append($caption);

/* Get alt text to use for captions. */
var captionText = $(this).children("img").attr("alt");

/* NAVIGATION BUTTONS */
/* Add back and forward buttons when the lightbox is visible to switch between photos. */


/* HIDE OVERLAY */
$overlay.click(function() {
    $overlay.hide();
});

/* SEARCH BOX */
/* Implement the search box at the top of the page that filters photos based on the captions.
    The photos should filter in real-time as you type.
    This could be a jQuery plugin that you find on the web, or code that you write yourself. */

/* */

