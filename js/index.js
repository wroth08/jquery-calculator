var expression = '';

// Bind click events to each button
$( "span" ).bind("click", function ( event ) {

// Add any numbers pressed to expression variable
  if ( $(event.target).is('#clear') === false && $(event.target).is('#equals') === false) {
    if ( $(event.target).hasClass("operator") === false ) {
      if ($("#screen").text() === "Error") {
        $( "#screen" ).empty();
      }
      var clone = $( event.target ).clone();
      clone.appendTo( $( "#screen" )  );
      expression += $(event.target).text().toString();
      console.log(expression);
    }

// Don't allow two operators to be used in a row or start with an operator
  else if ($( "#screen").children().length === 0) {
    $("#screen").append("Error");
    expression = '';
  }

//  Add the + or - operators pressed to expression
    else if ($(event.target).text() === "+" || $(event.target).text() === "-" ) {
      $( "#screen" ).empty();
      expression += $(event.target).text().toString();
    }


// Add * operator if pressed to expression
    else if ( $(event.target).text().toString() === 'x') {
      $( "#screen" ).empty();
      expression += "*";
    }

// Add / operator if pressed to expression
    else if ($(event.target).text().toString() === '÷') {
      $( "#screen" ).empty();
      expression += "/";
    }
  }

// Clear expression and screen if C is pressed
  else if ($(event.target).is('#clear')) {
    $( "#screen" ).empty();
    expression = '';
    console.log("cleared");
  }

// Calculate and display the result on the screen, removing the previous numbers
  else if ($(event.target).is('#equals')) {
    $( "#screen" ).empty();
    if (expression.substring(expression.length - 2) === "/0") {
      $( "#screen" ).append("Error");
    }
    else {
      var result = eval(expression);
      $( "#screen").append(result);
      console.log(eval(expression));
    }


  }
})
