
const friends = require('../data/friends');

module.exports = (app) => {
    app.get("/api/friends", (req, res) => {
        res.json(friends);
    })
    app.post("/api/friends", (req, res) => {
        let bestMatch;
        let score = 1000;

        let finalArr = [];
        let count = 0;
        matchMaker(req.body.scores, friends[0])


        function matchMaker (newUserArray, currentUsers){
            const exitComparison = friends.length;

            for (let i = 0; i < 10; i++){
                let difference = parseInt(newUserArray[i]) - parseInt(currentUsers.scores[i])

                if(difference < 0){difference *= -1}
                finalArr.push(difference)
            }
        
            const sumNum = finalArr.reduce((accumulator, currentValue) => accumulator + currentValue)

            if(sumNum < score){
                score = sumNum
                bestMatch = currentUsers
            }
            count += 1

            if(count < exitComparison){
               matchMaker(newUserArray, friends[count]) 
            } 
        }

        friends.push(req.body);
        res.json(bestMatch);
    })
}
