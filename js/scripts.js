//Business logic

function add(number1, number2) {
  return number1 + number2;
}

function subtract(number1, number2) {
  return number1-number2;
}

function multiply(number1, number2) {
  return number1*number2;
}

function divide(number1, number2) {
  return number1/number2;
}

//user interface logic

$(document).ready(function() /* telling the page to not run the JS until all of the HTML is loaded */ {
  $("form#add").submit(function(event) {
    event.preventDefault();
    const number1 = parseInt($("#add1").val());
    const number2 = parseInt($("#add2").val());
    const result = add(number1,number2);
    $("#output").text(result);
  });

});