const fruits = new Map();

fruits.set("Apple", 100);
fruits.set("Banana", 200);
fruits.set("Mango", 300);
fruits.set("Orange", 400);
fruits.set("Pineapple", 500);

console.log(fruits);
/*
Map(5) {
  'Apple' => 100,   
  'Banana' => 200,  
  'Mango' => 300,   
  'Orange' => 400,  
  'Pineapple' => 500
}
*/

console.log(fruits.get("Mango")); // 300

console.table(fruits.size); // 5

fruits.delete("Orange");
console.log(fruits);
/*
Map(4) {
  'Apple' => 100,
  'Banana' => 200,
  'Mango' => 300,
  'Pineapple' => 500
}
*/

console.log(fruits.has("Orange")); // false

fruits.forEach((count, fruit) => {
  console.log(`There are ${count} ${fruit}`);
});
/*
There are 100 Apple
There are 200 Banana
There are 300 Mango
There are 500 Pineapple
*/

for(let fruit of fruits.entries()) {
  console.log(fruit);
}
/*
[ 'Apple', 100 ]
[ 'Banana', 200 ]
[ 'Mango', 300 ]
[ 'Pineapple', 500 ]
*/