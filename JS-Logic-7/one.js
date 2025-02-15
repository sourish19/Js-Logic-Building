// Generate Multiplication table upto specified range

function Multiplication(num, range) {
  if (
    typeof num === "number" &&
    typeof range === "number" &&
    num > 0 &&
    range > 0
  ) {
    for (let i = 1; i <= range; i++) {
      let multi = num * i;
      console.log(`${num}*${i}=${multi}`);
    }
  } else {
    throw new Error("Invalid number");
  }
}
// 2nd approach
function Multiplication2(num, range) {
  let multi = 0;
  for (let i = 1; i <= range; i++) {
    multi += num;
    console.log(`${num}*${i}=${multi}`);
  }
}

const num = 2;
const range = 10;
console.log(`Multiplication Table of ${num} is :`);
Multiplication(num, range);
Multiplication2(num, range);
