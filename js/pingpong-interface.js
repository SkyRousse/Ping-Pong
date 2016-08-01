// JavaScript/jQuery Front-End Logic
var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    $(".output-results li").remove();
    $("img.hide-first").toggle();
    $("img.show-first").toggle();
    var inputNumber = parseInt($("input#input-number").val());
    var simpleCalculator = new Calculator("hot pink");
    var pongResults = simpleCalculator.pingPong(inputNumber);
    pongResults.forEach(function(result) {
      $(".output-results").append("<li>" + result + "</li>");
      });
    $(".output-message").text("The number " + inputNumber + " returns the following results: ");
    $("#result").show();
  });
});
