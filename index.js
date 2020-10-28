var input1 = document.querySelector("#num1");
var input2 = document.querySelector("#num2");
var button = document.querySelector("#button");
var result = document.querySelector("#result");
var sum = function (a, b) { return a + b; }; // Não tem motivos para tipar a função. O Ts entende que vai retornar apenas números.
button.addEventListener('click', function () { return console.log(sum(Number(input1.value), (Number(input2.value)))); });
