var weather = require("./weather.js");
var location = require("./location.js");
var argv = require("yargs")
        .option("location", {
            alias: 'l',
            demand: false,
            describe: "Location to fetch weather",
            type: "string"
        }).help("help")
        .argv;

if (typeof argv.l === "string" && argv.l.length > 0) {
    console.log(`The city ${argv.l} was provided.`);
    weather(argv.l, function(currentWeather) {
        console.log(currentWeather);
    });
} else {
    console.log(`No city was given. Attempting to use IP address to get location.`);
    location(function (location) {
        if (location) {
            weather(location.city, function(currentWeather) {
                console.log(currentWeather);
            });
        } else {
            console.log("Not able to get location");
        }
    });
}
