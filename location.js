var url = `http://ipinfo.io`;
var request = require("request");

module.exports = function (callback) {
    request ({url: url, json: true}, function(err, response, body) {
        if (err) {
            callback(`Cannot get location`);
        } else {
            callback(body);
        }
    });
};
