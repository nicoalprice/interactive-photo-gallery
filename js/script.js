/* Create a lightbox for viewing full size images when their thumbnails are clicked. */

/* Find a jQuery plugin for creating a photo gallery or write your own script.
    The gallery must include the ability to click on photos and view them in a lightbox. */

$("#gallery li a").click(function( event ) {
    event.preventDefault(); /* stop click from linking to img url */
    var href = $(this).attr("href"); /* get image's url */
    console.log(href);
});

/* Add text captions to the images when viewed in the lightbox. */

/* Add back and forward buttons when the lightbox is visible to switch between photos. */

/* Implement the search box at the top of the page that filters photos based on the captions.
    The photos should filter in real-time as you type.
    This could be a jQuery plugin that you find on the web, or code that you write yourself. */

/* */

