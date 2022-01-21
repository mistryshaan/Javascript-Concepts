const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");
letters.add("d");
letters.add("e");
letters.add("f");

console.log(letters); // Set(6) { 'a', 'b', 'c', 'd', 'e', 'f' }

letters.delete("f");

console.log(letters); // Set(5) { 'a', 'b', 'c', 'd', 'e' }

letters.forEach((letter) => {
  console.log(letter);
});
/*
a
b
c
d
e
f
*/

for(let letter of letters) {
  console.log(letter);
}
/*
a
b
c
d
e
f
*/