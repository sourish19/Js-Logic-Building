// Palindrome

//1st Method
function isPalindrome(str) {
  str = str.toLowerCase();
  let i = 0;
  let j = str.length - 1;
  for (; i < str.length / 2; i++, j--) {
    if (str[i] !== str[j]) {
      return false;
    }
  }
  return true;
}

//2nd Method
const isPalindrome2 = (str) => {
  str = str.toLowerCase();
  splittedStr = str.split("");
  splittedStr.reverse();
  const str2 = splittedStr.join("");
  return str === str2 ? true : false;
};

const str = "MooM";
const Palindrome = isPalindrome(str);
console.log(Palindrome);

const Palindrome2 = isPalindrome2(str);
console.log(Palindrome2);
