const friends = require('../data/friends');

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    })
    app.post("/api/friends", (req, res) => {

        for(let i = 0; i < friends.length ; i++){
            let unitDifference = 0;
            let arrDifference = 0;
            parseInt(friends[i].scores[i]) - req.body.scores[i]
        }

        friends.push(req.body);
        res.json(true);
    })
}
