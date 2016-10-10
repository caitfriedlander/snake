console.log("snek")
//var y = grid[i]
//var x = grid[i][i]
//play button function that launches the game screen
var snakeArray = [[1,1],
                  [1,2],
                  [1,3],
                  [2,3]]
var snakeLength = snakeArray.length;

//buttons!!
$(function(){
    $("#gameScreen").hide();
    $("#pauseButton").hide();
    $("#playButton").on("click", function(){
        $("#startScreen, #gameScreen").toggle();
        $("#playButton, #pauseButton").toggle();
        //function to spawn the apple randomly using the x and y grid
        //function to make the starter snake head appear in the same spot
        //on start every time
    });
});

//function to spawn a grid of divs for the game board
$(document).ready(function() {
    for(var x = 0; x < 37; x++) {
        for(var y = 0; y < 37; y++) {
            var space = $("<div class='space'></div>");
            space.appendTo('#gameScreen');
        //generate some kind of array of arrays based
        //on this equation here
        }
    }
});

function fillSnake() {
    for (var i=0; i < snakeLength; i++) {
        var row = snakeArray[i][0]
        var column = snakeArray[i][1]
        $('.space')[37 * row + column].style.backgroundColor = "black";
    }
}
fillSnake()

//function to move the cube around the grid using the arrow keys
//make all cubes attached to the snake follow the same motion as the head

//function to add a block to the end of the snake once the apple has been eaten

//lose states
//if snake head touches wall div function launch game over screen
//if snake head touches snake body function launch game over screen

