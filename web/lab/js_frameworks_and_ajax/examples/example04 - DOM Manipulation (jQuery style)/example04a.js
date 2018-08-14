"use strict";

// This file contains SOME examples of how we can get various HTML elements using JavaScript, and how we can modify them
// by changing their style, their content, or even adding new CSS classes to them.

// This is but a small taste of what you can do to modify HTML elements. For more, I recommend looking at the
// HTML DOM pages in the W3Schools JavaScript tutorials (https://www.w3schools.com/js/js_htmldom.asp), and / or
// Chapter 9 of the recommended reading.

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// The "onload" event handler function
$(function () {

    // Defining an event handler for btnChangeBox
    $("#btnChangeBox").click(function () {

        var r = getRndInteger(0, 255);
        var g = getRndInteger(0, 255);
        var b = getRndInteger(0, 255);

        // Can change elements' CSS through the "css" method.
        // Syntax: $("selector").css("css-property-name", "value");
        $("#box").css("background-color", "rgb(" + r + ", " + g + ", " + b + ")"); // Changing the value

        // Can also read the css method like this:
        var clr = $("#box").css("background-color");
        console.log("#box background-color = " + clr);

    });

    $("#btnChangePs").click(function () {

        // "each" will execute the given function once for each matching element (in this case, all <p>'s).
        // Optionally, the function can require an "index", which jQuery will automatically pass in.
        $("p").each(function (index) {

            $(this).text("Changed content. Index: " + index);

        });

        // Note that if we didn't want to display slightly different content in each <p>, we could change all of them to the same
        // value simply by doing this:
        // $("p").text("Hello World"); // Changes the text of all <p> elements on the page to "hello world".

    });

    $("#btnChangeMyClass").click(function () {

        // getElementsByClassName will return an array of all elements of that class.
        // This one will get all .myclass elements.
        var elements = document.getElementsByClassName("myclass");

        // Note that the "index" argument is optional. If we don't need it, jQuery will work without.
        $(".myClass").each(function () {

            var size = getRndInteger(80, 200);
            $(this).css("font-size", size + "%");

            var r = getRndInteger(0, 255);
            var g = getRndInteger(0, 255);
            var b = getRndInteger(0, 255);
            $(this).css("color", "rgb(" + r + ", " + g + ", " + b + ")");

        });
    });

    $("#btnAnimateBox").click(function () {

        $(".box2").addClass("coolAnimatedClass");
    });

    $("#btnChangeChildren").click(function () {

        // Set ALL "#parent span" elements to 150% and cursive.
        // When we don't need to set them all to different values, we can change all of them in a single line!
        $("#parent span").css("font-size", "150%");
        $("#parent span").css("font-family", "cursive");

        $("#parent span").each(function () {
            var r = getRndInteger(0, 255);
            var g = getRndInteger(0, 255);
            var b = getRndInteger(0, 255);
            $(this).css("color", "rgb(" + r + ", " + g + ", " + b + ")");
        });

    });

});