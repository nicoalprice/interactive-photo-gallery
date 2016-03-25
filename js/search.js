/* Treehouse Project #4: Interactive Photo Gallery */
/* by Nicoal Price */

/*** SEARCH BOX ***/
/* Implement the search box at the top of the page that filters photos based on the captions. The photos should filter in real-time as you type. This could be a jQuery plugin that you find on the web, or code that you write yourself. */


/* after a key is pressed... */
$("#search").keyup(function() {

    /* store the searched value */
    var $search = $(this).val();

    /* loop over each image */
    $("#gallery img").each(function() {
        /* get alt text */
        var $altText = $(this).attr("alt");
        /* if searched value matches alt keywords, show image */
        if($altText.toLowerCase().search($search.toLowerCase()) > -1) {
            /* show matching images */
            $(this).slideDown();
            /* hide image if no matches are found */
        } else {
            $(this).hide();
        }
    });
});
