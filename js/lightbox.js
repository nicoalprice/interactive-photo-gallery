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
/* Keep track of image index for arrow buttons */
var $index = 0;


/* Add overlay to body of index.html */
$("body").append($overlay);

/* When a thumbnail is clicked... */
$("#gallery a").click(function(event) {

    /* stop click from opening img url */
    event.preventDefault();

    var imageLocation = $(this).attr("href");
    var imageCaption =  $(this).children("img").attr("alt");

     // call function to capture information about the clicked image
    updateImage(imageLocation, imageCaption);

    /* add image to overlay */
    $overlay.append($image);

    /* get index for current image */
    $index = $(this).parent().index();

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


/*** FUNCTIONS ***/

function updateImage(imageLocation, imageCaption) {
    /* update image source */
    $image.attr("src", imageLocation);
    /* set caption text */
    $caption.text(imageCaption);
}

/* When the next button is clicked... */
    $nextArrow.on("click", function(event) {
    /* update index */
    $index++;
    /* use index to get next image */
    var newImage = $("#imageGallery a").get($index).getElementsByTagName("a");
    /* get new image location and caption */
    var imageLocation = $(newImage).attr("href");
    var imageCaption =  $(newImage).children("img").attr("alt");
    /* update the overlay image */
    updateImage(imageLocation, imageCaption);
});

/* When the previous button is clicked... */
$prevArrow.on("click", function(event){
    /* update the index */
    $index--;
    /* get the previous image by index */
    var newImage = $("#imageGallery a").get($index).getElementsByTagName("a");
    /* update the image location and caption */
    var imageLocation = $(newImage).attr("href");
    var imageCaption =  $(newImage).children("img").attr("alt");
    /* update the overlay */
    updateImage(imageLocation, imageCaption);
});

/* Hide overlay when exit button is clicked. */
$exit.on("click", function() {
    $overlay.fadeOut(1000);
    $overlay.hide();
});
