// Async demos

// console.log(1);
// console.log(2);

// **** Using set time out to show async ****
// setTimeout(function() {
//     console.log(1);
// }, 2000);

// console.log(2);

// **** Showing further Async functionality  ****
// setTimeout(function() {
//     console.log(1);
// }, 2000);

// setTimeout(function() {
//     console.log(3);
// }, 1000); 

// console.log(2);

// function printInTwoSeconds (message) {
//     setTimeout(function () {
//         console.log(message);
//     }, 2000);
// }

// printInTwoSeconds("Hello, Async");

var request = require("request");
var url = "http://api.openweathermap.org/data/2.5/weather?q=LosAngeles&units=imperial&appid=44db6a862fba0b067b1930da0d769e98";

request({url: url, json: true,}, function(err, response, body) {
    if (err) {
        console.log("Unable to fetch weather");
    } else {
        console.log(JSON.stringify(body, null, 4));
        console.log(`It is ${body.main.temp} degrees in ${body.name}`);
    }
});
















