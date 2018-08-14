"use strict";

// This is the syntax for writing an event handler function
// which will be run once the page has finished loading.
// Similar to window.onload.
$(function () {

    // Setting some styles and stuff using jQuery

    // Works with ids
    $("#myId").css("color", "green");

    // Works with collections too (e.g. classes)
    $(".myClass").css("color", "red");

    // And element types (also a collection)
    $("p").css("color", "blue");

    // All more complex CSS selectors work too.
    $("div span").css("font-size", "150%");

    var foo_parent = $("#foo").parent();


});