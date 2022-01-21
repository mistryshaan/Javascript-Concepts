var person = "Shaan";

function sayName() {
  var person = "Smith"
  console.log(person);
  sayOtherName();
  function sayOtherName() {
    var person = "Dev";
    console.log(person);
  }
}

sayName();
