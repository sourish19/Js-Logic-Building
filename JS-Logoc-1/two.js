// Area of a rectangle
function Area(length, breadth) {
  if ((length > 0) & (breadth > 0)) {
    return length * breadth;
  } else {
    throw new RangeError("Enter valid number");
  }
}

const length = 10;
const breadth = 10;
const AreaOfReactangle = Area(length, breadth);
console.log(AreaOfReactangle);
