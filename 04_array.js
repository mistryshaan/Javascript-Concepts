const array1 = ["a", "b", "c", "d"];
console.log(array1); // [ 'a', 'b', 'c', 'd' ]

//////////////////////////////////////////////////////////////////

const array2 = ["a", "b", "c", "d"];
array2[2] = "s";
console.log(array2); // [ 'a', 'b', 's', 'd' ]

//////////////////////////////////////////////////////////////////

const array3 = ["Shaan Mistry", 21, "Ahmedabad"];
console.log(array3); // [ 'Shaan Mistry', 21, 'Ahmedabad' ]

//////////////////////////////////////////////////////////////////

const array4 = ["a", "b", "c", "d"];
console.log(array4.length); // 4

//////////////////////////////////////////////////////////////////

const array5 = ["a", "b", "c", "d"];
for(let i = 0; i < array5.length; i++) {
  console.log(array5[i]);
}
/*
a
b
c
d
*/

array5.forEach(element => {
  console.log(element);
});
/*
a
b
c
d
*/

//////////////////////////////////////////////////////////////////

const array6 = ["a", "b", "c", "d"];
array6.push("e");
console.log(array6); // [ 'a', 'b', 'c', 'd', 'e' ]

//////////////////////////////////////////////////////////////////

const array7 = [10];
console.log(array7); // [ 10 ]

//////////////////////////////////////////////////////////////////

const array8 = new Array(10);
console.log(array8); // [ <10 empty items> ]

//////////////////////////////////////////////////////////////////

const array9 = ["a", "b", "c", "d"];
console.log(Array.isArray(array9)); // true

//////////////////////////////////////////////////////////////////

const array10 = ["a", "b", "c", "d"];
console.log(array10.toString()); // a,b,c,d

//////////////////////////////////////////////////////////////////

const array11 = ["a", "b", "c", "d"];
console.log(array11.join(", ")); // a, b, c, d

//////////////////////////////////////////////////////////////////

const array12 = ["a", "b", "c", "d"];
array12.pop();
console.log(array12); // [ 'a', 'b', 'c' ]

//////////////////////////////////////////////////////////////////

const array13 = ["a", "b", "c", "d"];
array13.shift();
console.log(array13); // [ 'b', 'c', 'd' ]

//////////////////////////////////////////////////////////////////

const array14 = ["a", "b", "c", "d"];
array14.unshift("s");
console.log(array14); // [ 's', 'a', 'b', 'c', 'd' ]

//////////////////////////////////////////////////////////////////

const array15 = ["a", "b", "c", "d"];
const array16 = ["e", "f", "g", "h"];
console.log(array15.concat(array16)); // [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h' ]

//////////////////////////////////////////////////////////////////

const array17 = ["a", "b", "c", "d"];
array17.splice(1, 0, "z");
console.log(array17); // [ 'a', 'z', 'b', 'c', 'd' ]

//////////////////////////////////////////////////////////////////

const array18 = ["a", "b", "c", "d"];
console.log(array18.slice(1)); // [ 'b', 'c', 'd' ]

//////////////////////////////////////////////////////////////////

const array19 = ["b", "d", "a", "c"]
array19.sort();
console.log(array19); // [ 'a', 'b', 'c', 'd' ]
array19.reverse();
console.log(array19); // [ 'd', 'c', 'b', 'a' ]

//////////////////////////////////////////////////////////////////

const array20 = [2, 5, 1, 10, 3];

array20.sort(function(a, b) {
  return a - b;
});
console.log(array20); // [ 1, 2, 3, 5, 10 ]

array20.sort(function(a, b) {
  return b - a;
});
console.log(array20); // [ 10, 5, 3, 2, 1 ]

//////////////////////////////////////////////////////////////////

console.log(Math.max(...array20)); // 10
console.log(Math.min(...array20)); // 1

//////////////////////////////////////////////////////////////////

const array21 = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

array21.sort(function(a, b) {
  return a.year - b.year;
});
console.log(array21);
/*
[
  { type: 'Saab', year: 2001 },    
  { type: 'BMW', year: 2010 },     
  { type: 'Volvo', year: 2016 }
] 
*/

array21.sort(function(a, b) {
  return b.year - a.year;
});
console.log(array21);
/* 
[
  { type: 'Volvo', year: 2016 },
  { type: 'BMW', year: 2010 },
  { type: 'Saab', year: 2001 }
]
*/

//////////////////////////////////////////////////////////////////

const array22 = [2, 5, 1, 10, 3];
const array23 = array22.map(function(element) {
  return element * 2;
});
console.log(array23); // [ 4, 10, 2, 20, 6 ]

const array24 = array22.filter(function(element) {
  return element > 4;
});
console.log(array24); // [ 5, 10 ]

const array25 = array22.reduce(function(sum, element) {
  return sum + element;
});
console.log(array25); // 21

const array26 = array22.reduce(function(sum, element) {
  return sum + element;
}, 100);
console.log(array26); // 121