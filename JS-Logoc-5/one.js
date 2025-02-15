// Leap Year

function LeapYear(year) {
  if (typeof year === "number") {
    if (year % 4 === 0 && year % 100 == 0) {
      if (year % 400 === 0) {
        return "Leap Year";
      } else {
        return "Not a Leap Year";
      }
    } else if (year % 4 === 0 && year % 100 !== 0) {
      return "Leap Year";
    } else {
      return "Not a Leap Year";
    }
  } 
  else {
    throw new Error("Invalid year");
  }
}

const year = "2024";
const isLeapYear = LeapYear(year);

console.log(`${year} : ${isLeapYear}`);
