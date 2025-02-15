// Factorial

function Factorial(number) {
  if (typeof number === "string" || typeof number === "number") {
    number === "string" ? (number = Number(number)) : number;

    if (!isNaN(number) && number >= 0) {
      let temp = 1;
      for (let i = 1; i <= number; i++) {
        temp *= i;
      }
      return temp;
    } else {
      throw new Error("Invalid number");
    }
  } else {
    throw new Error("Invalid number");
  }
}

//RECURSION
function Factorial2(number) {
  if (typeof number === "string" || typeof number === "number") {
    number === "string" ? (number = Number(number)) : number;
    if (!isNaN(number) && number >= 0) {
      if (number == 0 || number == 1) {
        return 1;
      } else {
        return number * Factorial2(number - 1);
      }
    } else {
      throw new Error("Enter valid Number");
    }
  } else {
    throw new Error("Enter valid Number");
  }
}

let number = "2";
const result = Factorial(number);
console.log(`Factorial of ${number} is ${result}`);

console.log("Method-2 [Recursion]");

const result2 = Factorial2(number);
console.log(`Factorial of ${number} is ${result2}`);
