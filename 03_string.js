let str1 = "Hello World";
console.log(str1); // Hello World

//////////////////////////////////////////////////////////////////

let str2 = "I'm Shaan";
console.log(str2); // I'm Shaan
console.log(str2.length); // 9

//////////////////////////////////////////////////////////////////

let str3 = "I'm \"Shaan\"";
console.log(str3); // I'm "Shaan"

let str4 = new String("I'm \"Shaan\"");

console.log(str3 == str4); // true
console.log(str3 === str4); // false

//////////////////////////////////////////////////////////////////

let str5 = new String("Hello World");
let str6 = new String("Hello World");
console.log(str5 == str6); // false
console.log(str5 === str6); // false

//////////////////////////////////////////////////////////////////

let str7 = "Hello world, Myself shaan";
console.log(str7.slice(13, 19)); // Myself
console.log(str7.slice(-12, -6)); // Myself
console.log(str7.slice(20)); // shaan
console.log(str7.slice(-5)); // shaan

//////////////////////////////////////////////////////////////////

let str8 = "Stay home, stay safe & work hard";
console.log(str8.substring(11, 20)); // stay safe
console.log(str8.substring(23)); // work hard

//////////////////////////////////////////////////////////////////

let str9 = "The quick brown fox jumps over the lazy dog";
console.log(str9.substr(16, 3)); // fox

//////////////////////////////////////////////////////////////////

let str10 = "The quick brown fox jumps over the lazy dog";
console.log(str10.replace("fox", "dog")); // The quick brown dog jumps over the lazy dog
console.log(str10.replace(/FOX/i, "cat")); // The quick brown cat jumps over the lazy dog
console.log(str10.replace(/the/ig, "a")); // a quick brown fox jumps over a lazy dog

//////////////////////////////////////////////////////////////////

let str11 = "shaan mistry";
console.log(str11.toUpperCase()); // SHAAN MISTRY

let str12 = "SHAAN MISTRY";
console.log(str12.toLowerCase()); // shaan mistry

//////////////////////////////////////////////////////////////////

let str13 = "Hello";
let str14 = "World!";
console.log(str13.concat("", str14)); // HelloWorld!
console.log(str13.concat(" ", str14)); // Hello World!

//////////////////////////////////////////////////////////////////

let str15 = "     Hello World!     ";
console.log(str15.trim()); // Hello World!

//////////////////////////////////////////////////////////////////

let str16 = "Shaan Mistry";
console.log(str16.charAt(6)); // M
console.log(str16.charCodeAt(6)); // 77
console.log(str16[6]); // M

//////////////////////////////////////////////////////////////////

let str17 = "Mohammad,Soumya,Daxesh,Savan,Shaan";
console.log(str17.split(",")); // [ 'Mohammad', 'Soumya', 'Daxesh', 'Savan', 'Shaan' ]
console.log(str17.split(".")); // [ 'Mohammad,Soumya,Daxesh,Savan,Shaan' ]

//////////////////////////////////////////////////////////////////

let str18 = "Mohammad, Soumya, Daxesh, Savan, Shaan";
console.log(str18.indexOf("Shaan")); // 33
console.log(str18.startsWith("Soumya")); // false
console.log(str18.endsWith("Mohammad, Soumya, Daxesh, Savan, Shaan")); // true