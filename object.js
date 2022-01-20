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


