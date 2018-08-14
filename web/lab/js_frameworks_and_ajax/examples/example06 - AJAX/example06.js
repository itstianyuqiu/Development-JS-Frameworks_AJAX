"use strict";

/**
 * A function which will make an AJAX call using jQuery.
 * 
 * Specifically, this function will make a GET request to https://tomcat1.sporadic.co.nz/AJAXEndpoint/Articles?article=2.
 * When the AJAX call is complete, the given success function will be invoked, with the "msg" argument containing the HTTP response.
 * In this case, that "msg" object will be an Article, which has an id, title and content. We will simply display that article's
 * title and content in a new <h1> and <p>, and append it to the content pane.
 */
function ajaxCall() {

    // Make an AJAX call using jQuery.
    $.ajax({

        // The URL to invoke. Note that we DO NOT stick the parameters (e.g. ...?param=value&param2=value2) on the end of the URL.
        url: 'https://sporadic.nz/ajax/articles',

        // The type of request (GET or POST most usually)
        type: "GET",

        // The parameters. jQuery will take care of sticking them at the end of the URL, or in the POST body, automatically depending
        // on the request type. If there are no parameters, we can leave this part out.
        data: {id: 1},

        // The function to be called if the AJAX request succeeds.
        success: function (msg) {

            // "msg" will be a JSON object representing the response. We don't need to use JSON.parse as it is already a JSON object.
            console.log(msg);

            // We can dynamically update the displayed webpage too.
            // Here we'll add the new article's title and content to the page.
            var newContent = $("<div><h1></h1><p></p></div>");
            newContent.find("h1").text(msg.title); // The find() method lets us search for HTML elements within other HTML elements.
            newContent.find("p").text(msg.content); // It works with any CSS selector.
            $("#contentPane").append(newContent);
        }

    });
}

// Document onready event handler
$(function () {

    // When the button is clicked, invoke the ajaxCall() function.
    $("#mybutton").click(ajaxCall);

});