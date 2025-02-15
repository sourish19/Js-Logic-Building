// Sum of Digits

function SumOfDigits(number) {
  if (typeof number === "string") {
    number = Number(number);
  }

  if (!Number.isInteger(number)) {
    throw new Error("Invalid Number: Input must be an integer.");
  }
  //   number = Math.abs(number);
  if (number >= 0) {
    let sum = 0;
    while (number > 0) {
      sum += number % 10;
      number = Math.floor(number / 10);
    }
    return sum;
  } else {
    throw new Error("Invalid number");
  }
}

const number = 123;
const result = SumOfDigits(number);

console.log(result);
