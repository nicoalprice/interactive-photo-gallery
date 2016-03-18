/* after key is pressed */
$("#search").keyup(function() {

    /* store searched value */
    var $search = $(this).val();

    /* loop over each image */
    $("#gallery img").each(function() {

        /* get alt text */
        var $altText = $(this).attr("alt");

        /* if searched value matches alt keywords, show image */
        if($altText.toLowerCase().search($search.toLowerCase()) > -1) {
            /* show matching images */
            $(this).show();
            /* move matches to beginning of gallery but retain spacing */

            /* hide image if no matches are found */
        } else {
            $(this).fadeOut("500");
        }
    });
});
