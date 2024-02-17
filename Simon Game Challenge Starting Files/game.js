let buttonColours=["red", "blue", "green", "yellow"];

let gamePattern=[];

let userClickedPattern=[];

$(".btn").click(function() {

    //2. Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
    let userChosenColour = $(this).attr("id");
  
    //4. Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
    userClickedPattern.push(userChosenColour);
  

  
  });

function nextSquence(){ 
    let randomNumber= Math.floor(Math.random()*4);

    let randomChosenColour= buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(500).fadeOut(500).fadeIn(500);

    let audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
};

$('.btn').click();