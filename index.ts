const input1 = document.querySelector("#num1") as HTMLInputElement;
const input2 = document.querySelector("#num2") as HTMLInputElement;
const button = document.querySelector("#button");
const result = document.querySelector("#result");

const sum = (a:number, b:number) => a + b;   // Não tem motivos para tipar a função. O Ts entende que vai retornar apenas números.
button.addEventListener('click', () => console.log(sum(Number(input1.value), (Number(input2.value)))))