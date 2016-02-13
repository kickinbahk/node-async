// Async demos

// console.log(1);
// console.log(2);

// **** Using set time out to show async ****
// setTimeout(function() {
//     console.log(1);
// }, 2000);

// console.log(2);

// **** Showing further Async functionality  ****
setTimeout(function() {
    console.log(1);
}, 2000);

setTimeout(function() {
    console.log(3);
}, 1000); 

console.log(2);


