// A simple function that takes a string,
// and returns the number of "lines" in that string

function countNewLines(sometext) {
   return sometext.split("\n").length;  
}

// Here is the magic sauce for using JQuery
// This is typical of how you say "do this when the document loads"

// The $ means we're using JQuery.  JQuery is mostly one function,
// and that function has the name $.   True story.

// $(document) means "get the document object".  
// $(document.ready means: I'm passing in the function that will 
//   get called whenver this document is loaded. 

$(document).ready(function(){

  $("#theButton").click( function(){


    var contents = $("#theTextArea").val();
    var howManyLines = countNewLines(contents);

    $("#theResultsGoHere").html(
                 "<p>There are " + howManyLines + " lines</p>"
    ); // ends the parameter to the .html function

  }); // this ends the call to the .click function
}); // this ends the call to the .ready function

