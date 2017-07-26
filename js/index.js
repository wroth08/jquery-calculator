var expression = '';

// Bind click events to each button
$( "span" ).bind("click", function ( event ) {

// Add any numbers pressed to expression variable
  if ( $(event.target).is('#clear') === false && $(event.target).is('#equals') === false) {
    if ( $(event.target).hasClass("operator") === false ) {
      var clone = $( event.target ).clone();
      clone.appendTo( $( "#screen" )  );
      expression += $(event.target).text().toString();
      console.log(expression);
    }

//  Add the + or - operators pressed to expression
    else if ($(event.target).text() === "+" || $(event.target).text() === "-" ) {
      var clone = $( event.target).clone();
      clone.appendTo( $("#screen") );
      expression += $(event.target).text().toString();
    }


// Add * operator if pressed to expression
    else if ( $(event.target).text().toString() === 'x') {
      expression += "*";
      $( "#screen" ).append("x");
    }

// Add / operator if pressed to expression
    else if ($(event.target).text().toString() === '÷') {
      expression += "/";
      $( "#screen" ).append("÷");
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
