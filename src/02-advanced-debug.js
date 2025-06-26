console.log('Advanced debugging example running.')
debugger

// first, define the function.
function goodPractices() {
  let game = gameObject();
  debugger;
  for (let gameKey in game) {
       console.log(gameKey);// are you ABSOLUTELY SURE what 'gameKey' is?
       // use the debugger to find out!
       debugger
    let teamObj = game[gameKey]
    for (let teamKey in teamObj) {
        ;// are you ABSOLUTELY SURE what 'teamKey' is?
      // use debugger to find out!
      debugger

      let data = teamObj.players;// what is 'data' at each loop through out this block?
      console.log(data); // when will the following line of code work and when will it break?
     
      for (let key in data) {
        debugger
      }
    }
  }
}

// then, call the function so it runs!
goodPractices()
