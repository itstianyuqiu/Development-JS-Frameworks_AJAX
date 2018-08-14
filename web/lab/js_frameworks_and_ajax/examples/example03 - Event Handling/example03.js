"use strict";

// This script shows the syntax for some jQuery events.
// For more commonly used events: https://www.w3schools.com/jquery/jquery_events.asp

// This is the syntax for writing an event handler function
// which will be run once the page has finished loading.
// Similar to window.onload.
$(function () {

    // Adding a "click" event handler for the button
    $("#doitbutton").click(function () {

        // "each" will execute the given function once for each item in the collection.
        // In this case, the provided function will be executed once for each "li"
        // element in the page.
        $("li").each(function () {

            // "this" refers to "this HTML element we're currently looking at". i.e. it will be
            // the <li> element we're up to, in this case.
            // $(this) will get the "jQuery version" of the element, so we can use jQuery methods
            // and properties on it.
            console.log($(this).text())
        });
    });


});