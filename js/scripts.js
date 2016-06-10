// JavaScript/jQuery Business Logic
var romanNumerals =["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];


var converter = function convert(inputNumber) {
  debugger;
 var roman = "";
  for( var i = 0; i<numbers.length; i++) {
    while(inputNumber >= numbers[i]) {
      roman = roman + romanNumerals[i];
      inputNumber = inputNumber - numbers[i];
    }
  }
  return roman;
};

// JavaScript/jQuery Front-End Logic
$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var inputNumber = $("input#input-number").val();
    //call function

    var roman = converter(inputNumber);
    // $("ul.converted-number li").remove();
    $(".output-message").text("The number " + inputNumber + " returns the following results: ");
    $(".converted-number").append();
    $("#result").show();
    //add output
  });
});
