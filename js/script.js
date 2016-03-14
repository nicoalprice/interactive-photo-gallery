/* Create a lightbox for viewing full size images when their thumbnails are clicked. */

/* Find a jQuery plugin for creating a photo gallery or write your own script.
    The gallery must include the ability to click on photos and view them in a lightbox. */


/* OVERLAY */
var $overlay = $("<div id='overlay'></div>");
 /* Add overlay to body of index.html */
$("body").append($overlay);

/* When a thumbnail is clicked... */
$("#gallery li a").click(function(event) {
    /* ...stop click from linking to img url */
    event.preventDefault();
    /* ...get image's url */
    var $href = $(this).attr("href");
    /* ...show the overlay */
    $overlay.show();
});


/* CAPTIONS */
/* Add text captions to the images when viewed in the lightbox. */

/* Get alt text to use for captions. */
var $caption = $("#gallery li alt").attr("alt");


/* NAVIGATION BUTTONS */
/* Add back and forward buttons when the lightbox is visible to switch between photos. */


/* HIDE OVERLAY */


/* SEARCH BOX */
/* Implement the search box at the top of the page that filters photos based on the captions.
    The photos should filter in real-time as you type.
    This could be a jQuery plugin that you find on the web, or code that you write yourself. */

/* */

