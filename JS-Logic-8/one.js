// Biggest number in array

function findLargest(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    let largest = arr[0];
    arr.forEach((element) => {
      if (element > largest) {
        largest = element;
      }
    });
    return largest;
  } else {
    throw new Error("Invalid Array");
  }
}

function findLargest2(arr) {
  if (Array.isArray(arr) && arr.length > 0) {
    return Math.max(...arr);
  } else {
    throw new Error("Invalid Array");
  }
}

const arr = [1, 2, 3,88,'89'];
const largest = findLargest(arr);
console.log(`Largest number in ${arr} is ${largest}`);

console.log("Using 2nd Method:");
const largest2 = findLargest2(arr);
console.log(`Largest number in ${arr} is ${largest2}`);
