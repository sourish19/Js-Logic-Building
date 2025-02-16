// Exponent without using Math.pow

const Result = (base, expo) => {
  if (
    typeof base === "number" &&
    typeof expo === "number" &&
    base > 0 &&
    expo > 0
  ) {
    let flag = base;
    for (let i = 1; i < expo; i++) {
      flag *= base;
    }
    return flag;
  } else {
    throw new Error("Invalid number");
  }
};

const base = 5;
const expo = 1;
console.log(Result(base, expo));
