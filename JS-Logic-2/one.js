// ODD EVEN

function OddEven(number) {
  if (typeof number == "number") {
    return number % 2 == 0 ? "Even" : "Odd";
  } else {
    throw new Error("Enter a valid number");
  }
}

const number = 2;
const result = OddEven(number);
console.log(result);
