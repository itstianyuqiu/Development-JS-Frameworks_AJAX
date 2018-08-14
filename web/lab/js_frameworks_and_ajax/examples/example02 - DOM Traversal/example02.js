"use strict";

// This is the syntax for writing an event handler function
// which will be run once the page has finished loading.
// Similar to window.onload.
$(function () {

    // Will be the parent div
    var theDiv = $("#theP").parent();
    console.log(theDiv);

    // Will be the strong and em elements
    var children = $("#theP").children();

    // Similar to a for-loop in Java
    for (var i = 0; i < children.length; i++) {
        console.log("Child " + i + ": ");
        console.log(children[i]);
    }

});