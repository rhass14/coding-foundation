// 01) Spot the errors and fix them

const size = 25;
let result;

if (size > 20) {
  result = "Greater than 20";
} else if (size > 10) {
  result = "Greater than 10";
} else {
  result = "Lower than 10";
}

// 02) oddEven function

function oddEven(number) {
  if (number > 0) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddEven(4));

function oddEven(number) {
  if (number > 4) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddEven(3));

function oddEven(number) {
  if (number > 4) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddEven(-1));

function oddEven(number) {
  if (number > 4) {
    return "even";
  } else {
    return "odd";
  }
}

console.log(oddEven(10));
