

//step 3, array created
var buttonColors = ["red", "blue", "green", "yellow"];

//step 5 created empty array

var gamePattern = [];
var userClickedPattern = []; 


//this is to keep track of the game whether it has started or not
var started = false;

// create a new variable and start it at zero

var level =0;
//dectect when a key is pressed then call nextSequence
$(document).keypress(function()
{
    if(!started){
        //change from "press any key" to level Zero
        $("#level-title").text("Level" + level);
        nextSequence(); // we call the function after a key is pressed
        started =true;
    }
});

$(".btn").click(function() {

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
  
    //1. In the same way we played sound in nextSequence() , when a user clicks on a button, the corresponding sound should be played.
    playSound(userChosenColour);
    animatePress(userChosenColour);

    //call check answer when a user clicks and chooses their answer 
    //and pass the index of the last answer
    checkAnswer(userClickedPattern.length-1);
  
  });


//create function called checkAnswer with an input called currentLevel
function checkAnswer(currentLevel){

    //create if statement to check to see if selected choice matches the previous
    //sequence

    if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length===gamePattern.length){
        

            setTimeout(function(){
                nextSequence();
            }, 1000);
        }
    } else{
        console.log("wrong");

        badAnswer();
        gameOver();
        startOver();
    }

}

//step 1 create a function called nextSequence
function nextSequence(){


    userClickedPattern = [];

    level++; //the level number is increased by 1 everytime this function is called

    //the h1 is changed again
    $("#level-title").text("Level " + level);
    
    var randomNumber = Math.floor(Math.random() * 4);
    //step 4 randomChosenColor created
    var randomColorChosen = buttonColors[randomNumber];

    //step 6, added random colour to game pattern array
    gamePattern.push(randomColorChosen);

    // step 3

//1. Use Jquery to select the button with 

$("#"+randomColorChosen).fadeIn(100).fadeOut(100).fadeIn(100);

playSound(randomColorChosen);
    
}



//creating a function to play the sound using an if statement
//switch would make more sense though.



//created a function called playesound with name as a perimeter
function playSound(name){

    

    var audio = new Audio("sounds/" + name + ".mp3");
audio.play();

}

function badAnswer()
{
   
  var wrong = new Audio("sounds/wrong.mp3");
      wrong.play();
     

      $("#level-title").text("Game Over, Press a Button to start again");
}

function gameOver()
{
    $("#body").addClass("game-over");
    setTimeout(function(){
        $("#body").removeClass("game-over");
    }, 200);

}

//adding animation to buttons

function animatePress(currentColor){

    //adding a new class to the button that has been pressed
  
$("#"+currentColor).addClass("pressed");

 //3. use Google/Stackoverflow to figure out how you can use Javascript to remove the pressed class after a 100 milliseconds.
 setTimeout(function () { // this callback function is called after timeout is called
    $("#" + currentColor).removeClass("pressed");//this removes the class that was added
  }, 100);//time is measured in miliseconds here
}

function startOver(){
    level = 0;
    started = false;
    gamePattern = [];

}



