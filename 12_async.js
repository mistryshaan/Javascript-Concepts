function sum(num1, num2, displaySumCallback) {
  let sum = num1 + num2
  return displaySumCallback(sum);
}

function displaySum(sum) {
  console.log(sum);
}

sum(7, 8, displaySum);

////////////////////////////////////////////////////////////////

setTimeout(() => {
  console.log("Hello world");
}, 5000);

////////////////////////////////////////////////////////////////

setInterval(() => {
  let time = new Date();
  console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
}, 1000);

////////////////////////////////////////////////////////////////

function displayFileStatus(status) {
  console.log(status);
}

function getFile(callBack) {
  let request = new XMLHttpRequest();
  request.open("GET", "example.html");
  request.onload = () => {
    if(request.status === 200) {
      callBack(`${request.response}`);
    } else {
      callBack(`Error: ${request.status}`)
    }
  }
  request.send();
}

getFile(displayFileStatus);

////////////////////////////////////////////////////////////////

let promise = new Promise((resolve, reject) => {
  let sum =  7 + 7;

  if(sum !== 14) {
    resolve("Success");
  } else {
    reject("Failed");
  }
});

promise.then((message) => {
  console.log(message);
});

promise.catch((message) => {
  console.log(message);
});

//////////////////////////////////////////////////////////////////

let promise1 = new Promise((resolve, reject) => {
  resolve("Promise 1");
});

let promise2 = new Promise((resolve, reject) => {
  resolve("Promise 2");
});

let promise3 = new Promise((resolve, reject) => {
  resolve("Promise 3");
});

Promise.all([
  promise1,
  promise2,
  promise3
]).then((messages) => console.log(messages));