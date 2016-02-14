function getLocation () {
    return new Promise(function (resolve, reject) {
        resolve("Los Angeles");
    });
}

function getWeather (location) {
    return new Promise(function (resolve, reject) {
        resolve(`It is 80 degrees in ${location}!`);
    });
}

getLocation().then(function(location) {
    return getWeather(location);
}).then(function (currentWeather) {
    console.log(currentWeather);
});
