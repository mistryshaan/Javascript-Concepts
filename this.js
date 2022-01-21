console.log(this); // {}

function sayName() {
  console.log(this);
}

sayName(); // <ref *1> Object [global]