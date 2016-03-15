/* Create a lightbox for viewing full size images when their thumbnails are clicked. */

/* Find a jQuery plugin for creating a photo gallery or write your own script. */

/* The gallery must include the ability to click on photos and view them in a lightbox. */


/*** OVERLAY ***/

var $overlay = $("<div id='overlay'></div>");
var $fullImage = $("<img>");
var $caption = $("<p></p>");
var $exit = $('<button id="exit">exit</button>');


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

    /* Get alt text to use for captions. */
    var $captionText = $(this).children("img").attr("alt");
    $caption.text($captionText);

    /* Add text captions to the images when viewed in the lightbox. */
    $overlay.append($caption);

    /* Add back and forward navigation buttons when the lightbox is visible to switch between photos. */
    var $prevArrow = $('<button id="prevArrow"><</button>')
    var $nextArrow = $('<button id="nextArrow">></button>');
    $overlay.append($prevArrow);
    $overlay.append($nextArrow);

    /* Link right arrow to next image */
    $nextArrow.click(function(event) {
        $fullImage.next("img").attr("src", $imageLocation);
    });

    /* Link left arrow to previous image */
     $prevArrow.click(function(event) {
        $fullImage.prev("img").attr("src", $imageLocation);
    });
//
//    //Creating buttons
//    $prevArrow.click(function() {
//        $newImg = $("#imageGallery .selected").prev("a");
//        $newImgLocation = $newImg.attr("href");
//        $newImg.next().removeClass("selected");  //remove class
//        $newImg.addClass("selected");            //add clas
//        $image.attr("src", $newImgLocation);
//    });
//
//    $nextArrow.click(function() {
//        newImg = $("#imageGallery .selected").next("a");
//        newImgLocation = newImg.attr("href");
//        newImg.prev().removeClass("selected");  //remove class
//        newImg.addClass("selected");            //add class
//        $image.attr("src", newImgLocation);
//    });

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


