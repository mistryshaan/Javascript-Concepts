// function sum(num1, num2, displaySumCallback) {
//   let sum = num1 + num2
//   return displaySumCallback(sum);
// }

// function displaySum(sum) {
//   console.log(sum);
// }

// sum(7, 8, displaySum);

//////////////////////////////////////////////////////////////////

// setTimeout(() => {
//   console.log("Hello world");
// }, 5000);

//////////////////////////////////////////////////////////////////

// setInterval(() => {
//   let time = new Date();
//   console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`);
// }, 1000);

//////////////////////////////////////////////////////////////////

// function displayFileStatus(status) {
//   console.log(status);
// }

// function getFile(callBack) {
//   let request = new XMLHttpRequest();
//   request.open("GET", "example.html");
//   request.onload = () => {
//     if(request.status === 200) {
//       callBack(`${request.response}`);
//     } else {
//       callBack(`Error: ${request.status}`)
//     }
//   }
//   request.send();
// }

// getFile(displayFileStatus);

//////////////////////////////////////////////////////////////////

