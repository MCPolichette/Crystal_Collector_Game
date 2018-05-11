
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
    var gemPics = ["assets/images/crystal0.PNG", "assets/images/crystal1.PNG", "assets/images/crystal2.PNG", "assets/images/crystal3.PNG", "assets/images/crystal4.PNG", "assets/images/crystal5.PNG"];

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
        alert("You went too far.... Please try again");
        losses++;
        $("#losses").text(losses);
    }
    // a function I found to try and shuffle the pictures displayed
    function shuffle(array) {
        var j, x, i;
        for (i = array.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            x = array[i];
            array[i] = array[j];
            array[j] = x;
        }
        return array;
    }

    function reset() {
        //game reset
        userNumber = 0;
        shuffle(gemPics);
        // console.log(gemPics);
        $("#userTotal").text("YOUR TOTAL");
        goal = (19 + Math.floor(Math.random() * 101));
        $("#goalNumber").text(goal);
        // game assigns random numbers to 4 crystal buttons numbers between 1 - 12
        gem1val = (Math.floor(Math.random() * 19) + 1);
        $("#gem1").val(gem1val);
        $("#gem1").attr("src", gemPics[0]);
        gem2val = (Math.floor(Math.random() * 19) + 1);
        $("#gem2").val(gem2val);
        $("#gem2").attr("src", gemPics[1]);
        gem3val = (Math.floor(Math.random() * 19) + 1);
        $("#gem3").val(gem3val);
        $("#gem3").attr("src", gemPics[2]);
        gem4val = (Math.floor(Math.random() * 19) + 1);
        $("#gem4").val(gem4val);
        $("#gem4").attr("src", gemPics[3]);

        $(".gem").delay(100).fadeIn(400);

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
            $('audio#clink5')[0].play();
            $(".gem").fadeOut('slow', winnerWinnerChickenDinner()).delay(200);
            reset();
        }
        // if userNumber > goalNumber {game restarts, losses++, sad sounds}
        else if (userNumber > goal) {
            $('audio#clank')[0].play();
            $(".gem").fadeOut('slow', loser()).delay(200);
            reset();
            // game continues
        } else {
            $('audio#clink2')[0].play();
            $(".gem").fadeOut('fast').fadeIn('fast');
        }
    })
})
// OTHER FUNCTION IDEAS


