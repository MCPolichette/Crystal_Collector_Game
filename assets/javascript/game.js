
//game starts
$(document).ready(function gameBegins() {

    // game variables
    var userNumber = 0;
    var goal = "";
    var wins = 0;
    var losses = 0;
    var gem1val = 0;
    var gem2val = 0;
    var gem3val = 0;
    var gem4val = 0;


    //game generates a random goal number between  19 and 120
    goal = (19 + Math.floor(Math.random() * 101));
    $("#goalNumber").text(goal);

    $("#win").text(wins);
    $("#losses").text(losses);

    // game assigns random numbers to 4 crystal buttons numbers between 1 - 12
    gem1val = (Math.floor(Math.random() * 19) + 1);
    $("#gem1").val(gem1val);
    gem2val = (Math.floor(Math.random() * 19) + 1);
    $("#gem2").val(gem2val);
    gem3val = (Math.floor(Math.random() * 19) + 1);
    $("#gem3").val(gem3val);
    gem4val = (Math.floor(Math.random() * 19) + 1);
    $("#gem4").val(gem4val);
    // game sets users user number to 0
    console.log("goal-" + goal, "  user-" + userNumber);
    console.log(gem1val, gem2val, gem3val, gem4val)

    // functions
    function winnerWinnerChickenDinner() {
        alert("YOU DID IT! YOUR THE BEST!");
        wins++;
        $("#wins").text(wins);
        reset();
    }
    function loser() {
        alert("you went too far.... try again");
        losses++;
        $("#losses").text(losses);
    }

    function reset() {
        //game reset
        userNumber = 0;
        $("#userTotal").text("YOUR TOTAL HERE");
        goal = (19 + Math.floor(Math.random() * 101));
        $("#goalNumber").text(goal);
        // game assigns random numbers to 4 crystal buttons numbers between 1 - 12
        gem1val = (Math.floor(Math.random() * 19) + 1);
        $("#gem1").val(gem1val);
        gem2val = (Math.floor(Math.random() * 19) + 1);
        $("#gem2").val(gem2val);
        gem3val = (Math.floor(Math.random() * 19) + 1);
        $("#gem3").val(gem3val);
        gem4val = (Math.floor(Math.random() * 19) + 1);
        $("#gem4").val(gem4val);
        // game sets users user number to 0
        console.log("goal-" + goal, "  user-" + userNumber);
        console.log(gem1val, gem2val, gem3val, gem4val)
    }


    // gameplay
    // user clicks on crystal, the value is added to userscore
    $(".gem").on('click', function () {

        var x = $(this);
        userNumber = +userNumber + +(x).val();
        $("#userTotal").text(userNumber);
        console.log(userNumber + " user score")
        // if userNumber == goalNumber {game restarts, wins++, winning sounds}
        if (userNumber == goal) {
            $(".gem").fadeOut('slow', winnerWinnerChickenDinner()).delay(200).fadeIn(400);
            reset();
        }
        else if (userNumber > goal) {
            $('audio#clank')[0].play();
            $(".gem").fadeOut('slow', loser()).delay(200).fadeIn(400);
            reset();
        } else {
            $('audio#clink4')[0].play();
            $(".gem").fadeOut('fast').fadeIn('fast');
        }

    })






})
// OTHER FUNCTION IDEAS
// changes gems randomly
// (function() {
//   var urls = ['1', '2', '3', '4'];
//   function swap() {
//     document.getElementById('theImage').setAttribute('src', urls[Math.round(Math.random() * urls.length)] + '.jpg');
//   }



// if userNumber > goalNumber {game restarts, losses++, sad sounds}