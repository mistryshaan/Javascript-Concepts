let x = multiply(5, 7);
console.log(x); // 35
console.log(multiply(5, 7)); // 35

function multiply(num1, num2) {
  return num1 * num2;
}

//////////////////////////////////////////////////////////////////

function test1() {
  let y = 7;
  console.log(y); // 7
}
test1();
// console.log(y); // y is not defined

//////////////////////////////////////////////////////////////////

let z = "Test string";
function test2() {
  console.log(z);
}
test2(); // Test string