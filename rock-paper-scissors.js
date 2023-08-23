

// an array of all the availabale choices in the game which is similar to the name of the button id.
const choices = ["rock","paper", "scissors"];
// a variable that stores the move of the player.
  // a variable to store the move the computer makes
//let outcome = ''; //variable to store the outcome of the game.
let computer_score = 0;
let Your_score = 0;


//going through the button id to find which button the user clicked.

for(let i = 0; i < choices.length; i++)
{
    let user_click = document.getElementById(choices[i]);
    //adding an event listener to the buttons
    user_click.addEventListener("click", buttonclicked);
}

$(document).ready(function(){  //to hide the computer buttons at the beggining of the game.

    $(".computer_images_container").hide()  
  });
  


function buttonclicked(event)
{
    let user_pick = ''; 
    

     user_pick = event.currentTarget.id;  
     change_button_color_onclick(user_pick);//changing the color of the button that the user picks.
     let computer_move = workcomputermove();
     //using the image display function
     if (computer_move == "rock")
     {
        display_computer_pick_images('rock-paper-scissors-images/fist.png', 250,250);
     }
     else if (computer_move == "paper")
     {
        display_computer_pick_images('rock-paper-scissors-images/hello.png', 250,250);

     }
     else if (computer_move == "scissors")
     {
        display_computer_pick_images('rock-paper-scissors-images/scissors.png', 250,250);

     }

    let outcome = gameevaluation(computer_move, user_pick);

     let UImessage = displaypicksandresults(user_pick,computer_move,outcome);

     document.getElementById("idReadout").innerHTML = UImessage;


}


//console.log(user_pick);
//console.log(computer_move);


//function to compare the moves of the player to those of the computer and return results.

function gameevaluation(movecomputer, moveplayer)

{
    let result = ["You win", "You lose", "it's a tie!"];

    if(movecomputer == "rock" && moveplayer == 'paper')
    {
        result = "You win";
    }
    else if (movecomputer == "paper" && moveplayer == "scissors")
    {
        result = "You win";
    }
    else if (movecomputer == "scissors" && moveplayer == "rock")
    {
        result = "You win";
    }
    else if (moveplayer == movecomputer)
    {
        result = "it's a tie!";
    }
    else 
    {
        result = "You lose";
    }
    return result;
}

function displaypicksandresults(user_pick,computer_move,result)
{
    let displaymessage = '';
    
    if (result == "You win")
    {
        computer_score += 0;
        Your_score += 1;

        displaymessage = `You picked ${user_pick} and computer picked ${computer_move}. You win! \n Computer Score = ${computer_score} \n Your Score = ${Your_score}`;
    }
    else if (result == "You lose")
    {   
        computer_score += 1;
        Your_score += 0;

        displaymessage = `You picked ${user_pick} and computer picked ${computer_move}. You lose! \n Computer Score = ${computer_score} \n Your Score = ${Your_score}`;

    }
    else if (result = "it's a tie!")
    {   
        computer_score += 0;
        Your_score += 0;

        displaymessage = `You picked ${user_pick} and computer picked ${computer_move}. It's a tie!\n Computer Score = ${computer_score} \n Your Score = ${Your_score}`;

    }
    return displaymessage;
}

function workcomputermove()
{
    let computer_pick = Math.random();
    let computer_move = '';

    if(computer_pick < (1/3))
    {
        computer_move = "rock";
    }
    else if(computer_pick > 1/3 && computer_pick < 2/3)
    {
        computer_move = "paper";
    }
    else if (computer_pick > 2/3 && computer_pick < 1)
    {
        computer_move = "scissors";
    }
    return computer_move;
}

function display_computer_pick_images(src, width, height)
{
    let old = document.getElementById("computer_image");
    if(old)
    {
        old.remove();
    }

    var img = document.createElement("img");
    img.src = src
    img.width = width;
    img.height = height;
    img.id = "computer_image";
    document.body.appendChild(img);

}
//function to change the color of the button that the user picks.
function change_button_color_onclick(btnid)
{
    let button_ids = ["rock","paper", "scissors"]
    for(let i = 0; i < button_ids.length; i++)
    {
        let button = document.getElementById(button_ids[i]);
        if(btnid == button_ids[i])
        {
            button.className = "highlightedimages";
        }
       else 
       {
        button.className = "plain_button";
       }

    }
}


