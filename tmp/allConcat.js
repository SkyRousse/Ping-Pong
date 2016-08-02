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

$(document).ready(function() {
  $('#skin').submit(function(event) {
    event.preventDefault();
    var skin = $('#skin option:selected').text();
    $('#skin').hide();
    $('#skin-output').prepend('<p>Your skin is: ' + skin + '</p>');
  });
});

$(document).ready(function() {
  $('#time').text(moment());
});

var apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response){
      $('.showWeather').text("The humidity in " + city + " is " + response.main.humidity + "%");
    }).fail(function(error) {
      $('.showWeather').text(error.responseJSON.message);
    });
  });
});
