var request = require("request");

module.exports = function (location) {
    return new Promise (function (resolve, reject) {
        var encodedLocation = encodeURIComponent(location);
        var url = `http://api.openweathermap.org/data/2.5/weather?q=${encodedLocation}&units=imperial&appid=44db6a862fba0b067b1930da0d769e98`;

        if (!location) {
            return reject(`No location provided`);
        }
        
        request({url: url, json: true}, function (err, response, body) {
            if (err) {
                reject (`Unable to fetch weather`);
            } else {
                resolve(`It's ${body.main.temp} degrees in ${body.name}`);
            }
        });        
    });    
};


