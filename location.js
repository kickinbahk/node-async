var url = `http://ipinfo.io`;
var request = require("request");

module.exports = function (callback) {
    return new Promise(function (resolve, reject) {
        request ({url: url, json: true}, function(err, response, body) {
            if (err) {
                reject(`Cannot get location`);
            } else {
                resolve(body);
            }
        });
    });
};
