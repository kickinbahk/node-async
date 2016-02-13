var request = require("request");

module.exports = function (location, callback) {
    var encodedLocation = encodeURIComponent(location);
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${encodedLocation}&units=imperial&appid=44db6a862fba0b067b1930da0d769e98`;

    if (!location) {
        callback(`No location provided`);
    }
    
    request({url: url, json: true}, function(err, response, body) {
        if (err) {
            callback();
        } else {
            callback(`It is ${body.main.temp} degrees in ${body.name}`);
        }
    });
};


