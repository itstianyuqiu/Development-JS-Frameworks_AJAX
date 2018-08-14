"use strict";

$(function () {

    $("#btnAddParagraph").click(function () {

        // How many paragraphs are there already?
        var count = $(".paragraphContainer>p").length;

        // Create a paragraph
        var p = $("<p></p>");

        // Set its properties
        p.text("This is paragraph number " + (count + 1));

        // Add it to the div
        $(".paragraphContainer").append(p);

    });

    $("#btnRemoveParagraph").click(function () {

        // Really complex CSS selectors work. This one means:
        // "Get the <p> which is the last child of elements with the paragraphContainer class".
        // Once we have matching elements, we can remove them with jQuery by just calling remove().
        $(".paragraphContainer>p:last-child").remove();
    });

    $("#btnCreateTable").click(function () {

        // Check if table already exists. If it does, display an error and quit the function.
        // Note: the jQuery selector won't return null - it will return a list of length 0 if there are no matches.
        if ($("#theTable").length > 0) {
            alert("Table already exists!")
            return;
        }

        // Create table
        var table = $("<table></table>");

        // Set its properties
        table.attr("id", "theTable");
        table.addClass("table");
        table.addClass("table-striped");

        // Can create many elements at a time like this...
        var thead = $("<thead><tr><th>Column #1</th><th>Column #2</th></tr></thead>");
        table.append(thead);

        // Can even include attributes, such as id etc, when we create HTML in jQuery.
        var tbody = $("<tbody id=\"theTableBody\"></tbody>");
        table.append(tbody);

        $(".tableContainer").append(table);

    });

    $("#btnAddRow").click(function () {

        // if the table doesn't exist, get outta here.
        if ($("#theTableBody").length == 0) {
            alert("Table doesn't exist. Create it first.");
            return;
        }

        // How many rows are there already?
        var count = $("#theTableBody>tr").length;

        // Create some HTML. This is another way we can add elements to the page.
        var row = $("<tr><td>Row " + count + ", column 1</td><td>Row " + count + ", column 2</td></tr>");
        $("#theTableBody").append(row);

    });

    $("#btnRemoveRow").click(function () {

        // if the table doesn't exist, get outta here.
        if ($("#theTableBody").length == 0) {
            alert("Table doesn't exist. Create it first.");
            return;
        }

        $("#theTableBody>tr:last-child").remove();
    });

});