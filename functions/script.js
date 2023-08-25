//01) Greet function

function welcomeMsg(name) {
  result = "Welcome" + " " + name + "!";
  return result;
}

console.log(welcomeMsg("Jane"));
console.log(welcomeMsg("Marc"));

// 02) Gross Price Function

function calcGrossPrice(priceNumber, taxRate) {
  result = priceNumber * taxRate + priceNumber;
  return result;
}

console.log(calcGrossPrice(20, 0.19));

console.log(calcGrossPrice(40, 0.16));

//03) Add Positive Function

function addPositive(number1, number2) {
  const PositiveNumber1 = Math.abs(number1);
  const PositiveNumber2 = Math.abs(number2);

  result = PositiveNumber1 + PositiveNumber2;
  return result;
}

console.log(addPositive(2, 3));
console.log(addPositive(3, -5));
console.log(addPositive(-1, -8));
