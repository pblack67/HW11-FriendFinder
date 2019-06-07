let friendData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (request, response) {
        response.json(friendData);
    });

};
