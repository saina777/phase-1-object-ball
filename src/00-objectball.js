function gameObject() {
    return {
   "home" : {
        "teamName": "Brooklyn Nets",
        "colors": ["Black", "White"],
        "players": {
            "Alan Anderson": {
                "number": 0,
                "Shoe": 16,
                "Points": 22,
                "Rebounds": 12,
                "Assists": 12,
                "Steals": 3,
                "Blocks": 1,
                "Slam Dunks": 1
             },
             "Reggie Evans": {
                "numer": 30,
                "Shoe": 14,
                "Points": 12,
                "Rebounds": 12,
                "Assists": 12,
                "Steals": 12,
                "Blocks": 12,
                "Slam Dunks": 12
             },
             "Brook Lopez": {
                "number": 11,
                "Shoe": 17,  
                "Points": 17,
                "Rebounds": 19,
                "Assists": 10, 
                "Steals": 3,
                "Blocks": 1,
                "Slam Dunks": 15 

             },
             "Mason Plumlee": {
                "number": 1,
                "Shoe": 19,
                "Points": 26,
                "Rebounds": 11,
                "Assists": 6,
                "Steals": 3,
                "Blocks": 8,
                "Slam Dunks": 5
             },
             "Jason Terry": {
                "number": 31,
                "Shoe": 15,
                "Points": 19,
                "Rebounds": 2,
                "Assists": 2,
                "Steals": 4,
                "Blocks": 11,
                "Slam Dunks": 1
             }
            }
        },
    "away" : {
        "teamName": "Charlotte Hornets",
        "colors": ["Turquoise", "Purple"],
        "players": {
            "Jeff Adrien": {
                "number": 4,
                "Shoe": 18,
                "Points": 10,
                "Rebounds": 1,
                "Assists": 1,
                "Steals": 2,
                "Blocks": 7,
                "Slam Dunks": 2,
            },
            "Bismak Biyombo": {
                "number": 0,
                "Shoe": 16,
                "Points": 12,
                "Rebounds": 4,
                "Assists": 7,
                "Steals": 7,
                "Blocks": 15,
                "Slam Dunks": 10,
            },
            "Design Diop": {
                "number": 2,
                "Shoe": 14,
                "Points": 24,
                "Rebounds": 12,
                "Assists": 12,
                "Steals": 4,
                "Blocks": 5,
                "Slam Dunks": 5
            },
            "Ben Gordon": {
                "number": 8,
                "Shoe": 15,
                "Points": 33,
                "Rebounds": 3,
                "Assists": 2,
                "Steals": 1,
                "Blocks": 1,
                "Slam Dunks": 0
            },
            "Brendan Haywood": {
                "number": 33,
                "Shoe": 15,
                "Points": 6,
                "Rebounds": 12,
                "Assists":12,
                "Steals": 22,
                "Blocks": 5,
                "Slam Dunks": 12
            },
        },
    },
};
return Obj;
};
 const numPointsScored = (name) => {
    let object = gameObject();
  
    if (object.home.players[name]) {
      return object.home.players[name].points;
    } else if (object.away.players[name]) {
      return object.away.players[name].points;
    } else {
      return false;
    }
  

  };
  
  const shoeSize = (name) => {
    let object = gameObject();
  
    if (object.home.players[name]) {
      return object.home.players[name].shoeSize;
    } else if (object.away.players[name]) {
      return object.away.players[name].shoeSize;
    } else {
      return false;
    }
  };
  
  const teamColors = (teamName) => {
    let object = gameObject();
  
    if (object.home.teamName === teamName) {
      return object.home.colors;
    } else if (object.away.teamName === teamName) {
      return object.away.colors;
    } else {
      return false;
    }
  };
  
  const teamNames = () => {
    let object = gameObject();
  
    let teams = [object.home.teamName, object.away.teamName];
  
    return teams;
  };
  
  const playerNumbers = (teamName) => {
    let object = gameObject();
  
    let jerseyNumbers = [];
  
    if (object.home.teamName === teamName) {
      for (let player in object.home.players) {
        console.log(player);
        jerseyNumbers.push(object.home.players[player].number);
      }
    } else {
      for (let player in object.away.players) {
        jerseyNumbers.push(object.away.players[player].number);
      }
    }
  
    return jerseyNumbers;
  };
  
  const bigShoeRebounds = () => {
    let object = gameObject();
    let shoeSize = 0;
  
    let playerWithLargestShoeSize = {};
    let playerName = "";
  
    for (let player in object.home.players) {
      if (object.home.players[player].shoe > shoeSize) {
        shoeSize = object.home.players[player].shoe;
        playerWithLargestShoeSize = object.home.players[player];
        playerName = player;
      }

    }
  
    for (let player in object.away.players) {
      if (object.away.players[player].shoe > shoeSize) {
        shoeSize = object.away.players[player].shoe;
        playerWithLargestShoeSize = object.away.players[player];
        playerName = player;
      }

    }
  
    return {
      [playerName]: playerWithLargestShoeSize,
    };
  };