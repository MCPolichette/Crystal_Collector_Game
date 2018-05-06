
// game variables
var userNumber = 0;
var goal = "";
var wins = 0;
var losses = 0;

// functions


//game starts

//game generates a random goal number between  19 and 120
goal = (19 + Math.floor(Math.random() * 101));
$("#goalNumber").push(goal);

console.log(goal);
// game assigns random numbers to 4 crystal buttons numbers between 1 - 12

// game sets users user number to 0

// gameplay
// user clicks on crystal, the value is added to userscore

// if userNumber === goalNumber {game restarts, wins++, winning sounds}

// if userNumber > goalNumber {game restarts, losses++, sad sounds}