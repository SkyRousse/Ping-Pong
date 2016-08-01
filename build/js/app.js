(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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

},{"./../js/pingpong.js":2}],2:[function(require,module,exports){
// JavaScript/jQuery Business Logic

function Calculator(skinName) {
  this.skin = skinName;
};

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
  };
    return results;
};

exports.calculatorModule = Calculator;

},{}]},{},[1]);
