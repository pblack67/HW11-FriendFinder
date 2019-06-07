let friendData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (request, response) {
        response.json(friendData);
    });

    app.post("/api/friends", function (request, response) {
        console.log("/api/friends POST");
        response.json(friendData[0]);
    });

};
