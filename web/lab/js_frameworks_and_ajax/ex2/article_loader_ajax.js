$(document).ready(function () {
    /* Variables to control where the application is with loading articles and how many it should load at a time */
    const load_article_count = 2;
    var load_article_next = 0;

    /* Insert a new article into the page. This creates the appropriate elements with classes, attributes
     * and text, then inserts the content into the page */
    function insert_article_into_page(article) {
        // Main article div container
        var article_div = $('<div>');
        article_div.addClass('article');

        // Article title line
        //TODO add the title from the article retrieved in the AJAX request to the element below
        var article_title = $('<h3>').text('THIS SHOULD BE THE TITLE FROM THE ARTICLE IN THE AJAX REQUEST');
        //TODO add the class 'article-body to the 'p' element created above

        // Article body
        //TODO add the content from the article retrieved in the AJAX request to the element below
        var article_body = $('<p>').text('THIS SHOULD BE THE CONTENT FROM THE ARTICLE IN THE AJAX REQUEST');
        //TODO add the class 'article-body to the 'p' element created above


        var article_read_more = $('<div>').text('Show full content');
        article_read_more.addClass('article-read-more');
        article_read_more.addClass('button');
        //TODO add the id from the article retrieved in the AJAX request to the 'article_id' attribute below
        article_read_more.attr('article_id', 'THIS SHOULD BE THE ID FROM THE ARTICLE'); // Store the article id for later use

        // Nest all the elements inside the main article div
        article_div.append(article_title);
        article_div.append(article_body);
        article_div.append(article_read_more);

        $('#article-load-button').before(article_div);

        //TODO add a click handler that will run the function 'load_full_article' to all divs with the class 'article-read-more'

    }


    /* Load the next batch of articles into the page */
    function load_more_articles() {
        //insert_article_into_page(articles_json[1]);
        $.ajax({
            url: 'https://sporadic.nz/ajax/articles',
            type: 'GET',
            data: {
                from: load_article_next,
                count: load_article_count
            },
            success: function (articles) {
                if (articles.length !== 0) {
                    // Grab the id of the last article and mark the next article as the first to be fetched next
                    load_article_next = articles[articles.length - 1].id + 1;

                    // Load each article into the page
                    for (let i = 0; i < articles.length; i++) {
                        insert_article_into_page(articles[i]);
                    }
                }
            }
        });
    }

    function load_full_article(){

        /* TODO: Retrieve the `article_id` attribute from the clicked element
                     * and store the value in a variable */

        /* TODO: Obtain a reference to the paragraph element that will recieve
         * the full article content. This will be a sibling element of the clicked
         * element. Store this reference in a variable. You may need to look at the
          * jQuery reference information to see how to get sibbling elements*/

        // TODO: Disable and hide the clicked element as it is no longer needed

        /* TODO: Using the articles endpoint and AJAX, retrieve the full article content
         * of the article that has the id retrieved above. Replace the contents of the
         * above referenced paragraph with the contents found in the retrieved data
         * you may need to look at the example to see how to use the article endpoint with id
         * this will involve creating a new AJAX request so it is important you look at
         * the examples and AJAX request from 'Task 1'*/

    }


    // Register click event on the article load button
    $('#article-load-button').click(load_more_articles);
    // Do an initial load
    load_more_articles();

});