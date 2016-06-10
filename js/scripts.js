// JavaScript/jQuery Business Logic
var range = [];
var rangeFinder = function rangeFinder(inputNumber) {
  for(var i = 0; i <= inputNumber; i++) {
      range.push(i);
    };
  return range;
};

var result = [];
var pingPong = function pingPong(range) {
  debugger;
  for (var i = 1; i < range.length; i++) {
    if (range[i] % 15 === 0) {
      result.push("pinpong");
    }
    else if (range[i] % 5 === 0) {
      result.push("pong");
    }
    else if (range[i] % 3 === 0) {
      result.push("ping");
    }
    else  {
      result.push(i);
    }
  };
    return result;
};

// JavaScript/jQuery Front-End Logic
$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var inputNumber = parseInt($("input#input-number").val());
    //call function
    rangeFinder(inputNumber);
    pingPong(range);
    // $("ul.converted-number li").remove();
    $(".output-message").text("The number " + inputNumber + " returns the following results: ");
    $(".converted-number").append();
    $("#result").show();
    //add output
  });
});
