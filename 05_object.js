const person = {
  firstName: "Shaan",
  lastName: "Mistry",
  age: 21,
  location: "Ahmedabad",
  fullDetails: function() {
    return `${this.firstName} ${this.lastName} is ${this.age} years old & lives in ${this.location}`;
  }
}

console.log(person);
/* Output:
{
  firstName: 'Shaan',  
  lastName: 'Mistry',  
  age: 21,
  location: 'Ahmedabad'
}
*/

console.log(person.firstName); // Shaan

console.log(person["firstName"]); // Shaan

console.log(person.fullDetails()); // Shaan Mistry is 21 years old & lives in Ahmedabad

console.log(Object.values(person)); // [ 'Shaan', 'Mistry', 21, 'Ahmedabad', [Function: fullDetails] ]

console.log(JSON.stringify(person)); // {"firstName":"Shaan","lastName":"Mistry","age":21,"location":"Ahmedabad"}

const clonePerson = {...person};
console.log(clonePerson);
clonePerson.country = "India";
console.log(clonePerson);

//////////////////////////////////////////////////////////////////

function Person2(firstName, lastName, age, location) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.location = location;
  this.fullName = function() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const Friend1 = new Person2("Dev", "Jha", 21, "Banaras");

console.log(Friend1);
/*
Person2 {
  firstName: 'Dev',  
  lastName: 'Jha',   
  age: 21,
  location: 'Banaras'
}
*/

console.log(Friend1.fullName()); // Dev Jha