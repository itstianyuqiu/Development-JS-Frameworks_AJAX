"use strict";

// This file contains examples of SOME jQuery Effects. There are many more possibilities - for more information,
// check out the jQuery Effects section of the W3Schools jQuery tutorial:
// https://www.w3schools.com/jquery/default.asp

// Function to animate the box in a forwards direction.
function animateBox() {

    // We can animate almost any CSS property (see note below regarding color animations).
    // Note that the property names are similar to standard JavaScript (for example, margin-left
    // would be marginLeft, padding-bottom would be paddingBottom, etc).
    // More info about animate(): https://www.w3schools.com/jquery/jquery_animate.asp

    // Animate forwards
    // $("#box").animate({
    //     marginLeft: $("#box").parent().width() - 220
    // }, 3000);

    // Then animate backwards.
    // This second animation will be placed in a queue, to be run once the first animation has finished.
    // This second animation also has a callback to animateBox - so the function will be called again once this
    // reverse animation is done. Thus, the animation will repeat indefinitely.
    // $("#box").animate({
    //     marginLeft: 20
    // }, 3000, animateBox);

    // This is the same code, but also changing from blue to red, and vice versa.
    // Note: color animations aren't supported by default in jQuery. To support these animations,
    // the color animations plugin is required: https://bitstorm.org/jquery/color-animation/
    // (In example05.html, the <script> tag referencing this library is commented out, you can uncomment it).
    $("#box").animate({
        marginLeft: $("#box").parent().width() - 220,
        backgroundColor: "red"
    }, 3000);

    $("#box").animate({
        marginLeft: 20,
        backgroundColor: "blue"
    }, 3000, animateBox);

}

// Document ready event handler
$(function () {

    // This will add an onclick listener to ALL <p> elements inside #disappearingPContainer...
    $("#disappearingPContainer>p").click(function () {

        // When a particular <p> is clicked, it will be hidden.
        $(this).hide();

    });

    // This will make the btnShowPs button show all paragraphs when clicked.
    $("#btnShowPs").click(function () {

        $("#disappearingPContainer>p").show();
    });

    // This will add an onclick listener to ALL <p> elements inside #fadingPContainer...
    $("#fadingPContainer>p").click(function () {

        // When a particular <p> is clicked, it will fade out over 600ms.
        //$(this).fadeOut(600);

        // The fadeOut function will cause other elements to shift once the paragraph has finished
        // fading out. If you want to leave a "hole" in the page instead, you can try this:
        $(this).animate({

            opacity: 0

        }, 600);

    });

    // This will make the btnUnfadePs button fade-in all paragraphs when clicked, over 600ms.
    $("#btnUnfadePs").click(function () {

        //$("#fadingPContainer>p").fadeIn(600);

        //If you used the "animate" function above, you'll need to use it here as well (you can't mix them in this case):
        $("#fadingPContainer>p").animate({

            opacity: 1

        }, 600);
    });

    // Start box animation
    $("#btnStartAnimation").click(function () {
        $("#btnStartAnimation").attr("disabled", true);
        $("#btnStopAnimation").attr("disabled", false);
        animateBox();
    });

    // Stop box animation
    $("#btnStopAnimation").click(function () {
        $("#btnStopAnimation").attr("disabled", true);
        $("#btnStartAnimation").attr("disabled", false);

        // "stop" will just stop the current animation but not clear the animation queue.
        // So, if this is called on the "forwards" animation, the backwards animation will still play.
        //$("#box").stop();

        // This will stop everything.
        $("#box").stop(true);
    });

    // More information about fading (including a couple of other methods):
    // https://www.w3schools.com/jquery/jquery_fade.asp

});