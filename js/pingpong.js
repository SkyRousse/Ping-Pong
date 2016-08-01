// JavaScript/jQuery Business Logic

function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function pingPong(inputNumber) {
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
  }
    return results;
};

exports.calculatorModule = Calculator;
