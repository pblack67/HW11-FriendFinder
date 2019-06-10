let friendData = require("../data/friends");

module.exports = function (app) {

    app.get("/api/friends", function (request, response) {
        response.json(friendData);
    });

    app.post("/api/friends", function (request, response) {
        let minimumDifference = 100;
        let bestFriend = null;
        let friend = request.body;
        for (let i = 0; i < friendData.length; i++) {
            let currentDifference = getDifference(friend, friendData[i]);
            if (currentDifference < minimumDifference) {
                minimumDifference = currentDifference;
                bestFriend = friendData[i];
            }
        }
        friendData.push(friend);
        response.json(bestFriend);
    });

};

function getDifference(friend1, friend2) {
    let difference = 0;
    for (let i = 0; i < friend1.scores.length; i++) {
        difference += Math.abs(friend1.scores[i] - friend2.scores[i]);
    }
    return difference;
}