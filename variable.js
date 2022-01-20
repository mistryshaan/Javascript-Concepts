x = 7;
var x;
console.log(x); // 7

var x = 8;
console.log(x); // 8

let x = 7;
console.log(x); // SyntaxError: Identifier 'x' has already been declared

const x = 7;
console.log(x); // SyntaxError: Identifier 'x' has already been declared

//////////////////////////////////////////////////////////////////

let carName1 = "Volvo";
function displayCarName1() {
  console.log(carName1);
}
displayCarName1(); // Volvo

let carName2 = "Volvo";
function displayCarName2() {
  let carName2 = "Ford";
  console.log(carName2);
}
displayCarName2(); // Ford

//////////////////////////////////////////////////////////////////

var test = "shaan";
console.log(window.test); // window is not defined in 'node' environment but output is 'shaan' in browser