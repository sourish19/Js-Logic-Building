function Sum(num1, num2) {
  if ((typeof num1 == "number") & (typeof num2 == "number")) {
    return num1 + num2;
  } else {
    return "Enter a valid Number";
  }
}

const num1 = 2;
const num2 = 2;
const result = Sum(num1, num2);

console.log(result);
