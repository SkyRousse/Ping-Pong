// JavaScript/jQuery Business Logic
var results = [];
var pingPong = function pingPong(inputNumber) {
  for (var i = 1; i <= inputNumber; i++) {
    if (i % 15 === 0) {
      results.push("pinpong");
    }
    else if (i % 5 === 0) {
      results.push("pong");
    }
    else if (i % 3 === 0) {
      results.push("ping");
    }
    else  {
      results.push(i);
    }
  };
    return results;
};


// JavaScript/jQuery Front-End Logic
$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#input-number").val());
    pingPong(inputNumber);
    results.forEach(function(result) {
      // debugger;
      $(".ouput-results").append("<li>" + result + "</li>");
    });
    $(".output-message").text("The number " + inputNumber + " returns the following results: ");
    $("#result").show();
    //add output
  });
});
