// JavaScript/jQuery Business Logic

var pingPong = function pingPong(inputNumber) {
  var results = [];
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
    $(".output-results li").remove();
    var inputNumber = parseInt($("input#input-number").val());
    var pongResults = pingPong(inputNumber);

    pongResults.forEach(function(result) {
      $(".output-results").append("<li>" + result + "</li>");
      });
    $(".output-message").text("The number " + inputNumber + " returns the following results: ");
    $("#result").show();
  });
});
