// Reverse a string 


function Reverse(str) {
  if (typeof str === "string") {
    let str2 = "";
    for (let i = str.length - 1; i >= 0; i--) {
      str2 += str.at(i);
    }
    return str2.toLowerCase();
  } else {
    throw new Error("Enter a valid string");
  }
}

function Reverse2(str) {
    const newArray = str.split("")
    const reversedArray = newArray.reverse()
    return (reversedArray.join("").toLowerCase())
}

const str = "Software Development";
const myReversedString = Reverse(str);
const myReversedString2 = Reverse2(str);

console.log("1st Method:");
console.log(
  `Original String is : ${str} & Reverse String is : ${myReversedString}`
);
console.log("2nd Method:");
console.log(
  `Original String is : ${str} & Reverse String is : ${myReversedString2}`
);
