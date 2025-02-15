// Smallest number among three numbers

function Smallest(num1, num2, num3) {
  if (
    typeof num1 == "number" &&
    typeof num2 == "number" &&
    typeof num3 == "number"
  ) {
    let SmallestNumber = num1;
    if (num1 === num2 && num2 === num3) {
      return "All the numbers are equal ";
    }
    if (num2 <= SmallestNumber) {
      SmallestNumber = num2;
    }
    if (num3 <= SmallestNumber) {
      SmallestNumber = num3;
    }
    return SmallestNumber;
  } else {
    throw new Error("Enter valid number");
  }
}

const num1 = 1;
const num2 = 1;
const num3 = 1;
const result = Smallest(num1, num2, num3);

console.log(result);
