// Count Vowels & Consonents

// 1st Method
const vowelConsonents = (str) => {
  if (typeof str === "string") {
    str = str.toLowerCase();
    str = str.replaceAll(" ", "");
    const vowels = "aeiou";
    let vowelCount = 0;
    const consonents = "bcdfghjklmnpqrstvwxyz";
    let consonentCount = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else if (consonents.includes(char)) {
        consonentCount++;
      }
    }
    return `Vowels : ${vowelCount} Consonents : ${consonentCount}`;
  } else {
    throw new Error("Invalid String");
  }
};

// 2nd Method
const vowelConsonents2 = (str) => {
  if (typeof str === "string") {
    str = str.toLowerCase();
    str = str.replaceAll(" ", "");
    const vowels = "aeiou";
    let vowelCount = 0;
    const consonents = "bcdfghjklmnpqrstvwxyz";
    let consonentCount = 0;
    for (let char of str) {
      if (vowels.includes(char)) {
        vowelCount++;
      } else if (/^[a-z]$/.test(char)) {
        consonentCount++;
      }
    }
    return `Vowels : ${vowelCount} Consonents : ${consonentCount}`;
  } else {
    throw new Error("Invalid String");
  }
};

const str = "Hello World Hello World";
console.log(vowelConsonents(str));
console.log("2nd Method:-");
console.log(vowelConsonents2(str));
