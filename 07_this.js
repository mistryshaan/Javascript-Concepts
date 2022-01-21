console.log(this); // {}

//////////////////////////////////////////////////////////////////

function sayName() {
  console.log(this);
}

sayName(); // <ref *1> Object [global]

//////////////////////////////////////////////////////////////////

const user = {
  firstName: "Shaan",
  lastName: "Mistry",
  age: 21,
  location: "Ahmedabad",
  getUserInfo: function() {
    console.log(this);
    
    sayHello();

    function sayHello() {
      console.log(this); // <ref *1> Object [global]
    }
  }
}

user.getUserInfo();
/*
{
  firstName: 'Shaan',
  lastName: 'Mistry',
  age: 21,
  location: 'Ahmedabad',
  getUserInfo: [Function: getUserInfo]
}
*/
